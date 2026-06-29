import axios, { AxiosResponse } from 'axios';
import { Api } from './generated/bitbucket-api';
import { createAuthHeader } from '../utils/api';
import { getToken } from '../utils/token';

/**
 * The configured Bitbucket API client. This is the generated `Api` class
 * (see ./generated/bitbucket-api.ts) wired up with authentication, sensible
 * query-string serialization, and friendly error messages.
 */
export type BitbucketApi = Api<unknown>;

const BITBUCKET_API_BASE = 'https://api.bitbucket.org/2.0';

let cachedApi: BitbucketApi | undefined;

/**
 * Returns a ready-to-use, authenticated API client. The client is built once
 * per process from the saved credentials and cached.
 */
export async function getApi(): Promise<BitbucketApi> {
  if (!cachedApi) {
    const credentials = await getToken();
    cachedApi = createApi(createAuthHeader(credentials));
  }
  return cachedApi;
}

/**
 * Builds an API client from a ready Basic-auth header. Exposed separately so it
 * can be unit-tested or reused without touching the credential store.
 */
export function createApi(authHeader: string): BitbucketApi {
  const api = new Api({
    baseURL: BITBUCKET_API_BASE,
    // Bitbucket expects repeated keys for multi-valued params (e.g.
    // `state=OPEN&state=MERGED`), not the bracketed `state[]=` form.
    paramsSerializer: { indexes: null },
  });

  // Apply auth as a common default header so it is attached to every request,
  // including the direct `instance.get` calls used while following pagination
  // links. (Passing `headers` to the constructor lands them where the generated
  // client's header merge does not pick them up.)
  api.instance.defaults.headers.common['Authorization'] = authHeader;

  api.instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(toFriendlyError(error)),
  );

  return api;
}

/**
 * Translates raw axios errors into concise, user-facing messages. Surfaces the
 * Bitbucket API's own error message when present.
 */
export function toFriendlyError(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data as { error?: { message?: string; detail?: string } } | undefined;
    const apiMessage = data?.error?.message || data?.error?.detail;

    if (status === 401) {
      return new Error('Invalid credentials. Check your Bitbucket username and API token (username:api_token).');
    }
    if (status === 403) {
      return new Error(apiMessage ? `Access forbidden: ${apiMessage}` : 'Access forbidden. You may not have permission for this resource.');
    }
    if (status === 404) {
      return new Error(apiMessage ? `Not found: ${apiMessage}` : 'Not found. Check the workspace, repository, and IDs.');
    }
    if (status) {
      return new Error(apiMessage ? `Request failed (${status}): ${apiMessage}` : `Request failed: ${status} ${error.response?.statusText ?? ''}`.trim());
    }
    return new Error(`Could not reach Bitbucket: ${error.message}`);
  }

  return error instanceof Error ? error : new Error(String(error));
}

/** Shape shared by every paginated Bitbucket response. */
interface Page<T> {
  values?: T[];
  next?: string;
}

/**
 * Collects every item across a paginated endpoint by following `next` links.
 * Pass the first page request (any of the generated `*List` methods); an
 * optional `limit` stops early once enough items have been gathered.
 */
export async function paginate<T>(
  api: BitbucketApi,
  firstPage: Promise<AxiosResponse<Page<T>>>,
  options: { limit?: number } = {},
): Promise<T[]> {
  const items: T[] = [];
  let response = await firstPage;

  while (true) {
    const page = response.data;
    for (const value of page.values ?? []) {
      items.push(value);
      if (options.limit && items.length >= options.limit) {
        return items;
      }
    }

    if (!page.next) {
      return items;
    }
    // `next` is an absolute URL; axios ignores baseURL for absolute URLs.
    response = await api.instance.get<Page<T>>(page.next);
  }
}

/** Unwraps an axios response to its `data` payload. */
export async function unwrap<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
  return (await request).data;
}
