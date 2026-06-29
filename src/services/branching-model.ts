import { BitbucketApi, unwrap } from '../api/client';
import type {
  BranchingModel,
  BranchingModelSettings,
  EffectiveRepoBranchingModel,
  ProjectBranchingModel,
} from '../api/generated/bitbucket-api';

/** Facade over the generated client for the Branching model API group. */

export interface RepoRef {
  workspace: string;
  repo: string;
}

// --- repository-level -----------------------------------------------------

export function getModel(api: BitbucketApi, ref: RepoRef): Promise<BranchingModel> {
  return unwrap(api.repositories.branchingModelList(ref.repo, ref.workspace));
}

export function getEffectiveModel(api: BitbucketApi, ref: RepoRef): Promise<EffectiveRepoBranchingModel> {
  return unwrap(api.repositories.effectiveBranchingModelList(ref.repo, ref.workspace));
}

export function getSettings(api: BitbucketApi, ref: RepoRef): Promise<BranchingModelSettings> {
  return unwrap(api.repositories.branchingModelSettingsList(ref.repo, ref.workspace));
}

export async function updateSettings(api: BitbucketApi, ref: RepoRef, body: BranchingModelSettings): Promise<BranchingModelSettings> {
  // The generated method has no request-body parameter, so PUT directly.
  const response = await api.instance.put<BranchingModelSettings>(
    `/repositories/${ref.workspace}/${ref.repo}/branching-model/settings`,
    body,
  );
  return response.data;
}

// --- project-level --------------------------------------------------------

export function getProjectModel(api: BitbucketApi, workspace: string, projectKey: string): Promise<ProjectBranchingModel> {
  return unwrap(api.workspaces.projectsBranchingModelList(projectKey, workspace));
}

export function getProjectSettings(api: BitbucketApi, workspace: string, projectKey: string): Promise<BranchingModelSettings> {
  return unwrap(api.workspaces.projectsBranchingModelSettingsList(projectKey, workspace));
}

export async function updateProjectSettings(
  api: BitbucketApi,
  workspace: string,
  projectKey: string,
  body: BranchingModelSettings,
): Promise<BranchingModelSettings> {
  const response = await api.instance.put<BranchingModelSettings>(
    `/workspaces/${workspace}/projects/${projectKey}/branching-model/settings`,
    body,
  );
  return response.data;
}
