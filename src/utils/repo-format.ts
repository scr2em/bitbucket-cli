import { consola } from 'consola';
import { renderTable } from './table';
import type { Repository } from '../api/generated/bitbucket-api';

function formatDate(value?: string): string {
  return value ? new Date(value).toLocaleDateString() : 'unknown';
}

/** Tabular list of repositories with their key metadata. */
export function printRepositoryList(repos: Repository[]): void {
  consola.success(`Found ${repos.length} repositor${repos.length === 1 ? 'y' : 'ies'}:`);
  const rows = repos.map((repo) => [
    repo.name ?? '?',
    repo.is_private ? 'private' : 'public',
    repo.language || '',
    repo.project?.key || '',
    formatDate(repo.updated_on),
    (repo.description ?? '').replace(/\s+/g, ' ').trim(),
  ]);
  consola.log(
    renderTable(
      [
        { header: 'Name', max: 36 },
        { header: 'Visibility' },
        { header: 'Language', max: 14 },
        { header: 'Project', max: 12 },
        { header: 'Updated' },
        { header: 'Description', max: 44 },
      ],
      rows,
    ),
  );
}
