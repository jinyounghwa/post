import Fuse from 'fuse.js';
import { getAllStarRepos, type StarRepo } from './mdx';

interface SearchRepoItem extends StarRepo {
  categorySlug: string;
  categoryTitle: string;
}

export function buildSearchIndex(): Fuse<SearchRepoItem> {
  const repos = getAllStarRepos();

  return new Fuse(repos, {
    keys: [
      { name: 'name', weight: 0.3 },
      { name: 'description', weight: 0.3 },
      { name: 'reason', weight: 0.2 },
      { name: 'categoryTitle', weight: 0.2 },
    ],
    threshold: 0.4,
    includeScore: true,
  });
}

export function getSearchData(): SearchRepoItem[] {
  return getAllStarRepos();
}
