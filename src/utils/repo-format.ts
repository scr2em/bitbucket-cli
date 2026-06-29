import { consola } from 'consola';
import type { Repository } from '../api/generated/bitbucket-api';

function formatDate(value?: string): string {
  return value ? new Date(value).toLocaleDateString() : 'unknown';
}

/** Lists repositories with their key metadata. */
export function printRepositoryList(repos: Repository[]): void {
  consola.success(`Found ${repos.length} repositor${repos.length === 1 ? 'y' : 'ies'}:`);
  consola.log('');
  repos.forEach((repo) => {
    const visibility = repo.is_private ? '🔒 private' : '🌍 public';
    const language = repo.language ? `  ·  ${repo.language}` : '';
    consola.log(`${repo.name}  (${visibility})${language}`);
    if (repo.description) consola.log(`   ${repo.description.split('\n')[0]}`);
    consola.log(`   updated ${formatDate(repo.updated_on)}${repo.project?.key ? `  ·  project ${repo.project.key}` : ''}`);
    if (repo.links?.html?.href) consola.log(`   ${repo.links.html.href}`);
    consola.log('');
  });
}
