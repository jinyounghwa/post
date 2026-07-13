import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CATEGORY_LABELS, type MediaType, type PortfolioItem } from './portfolio-shared';

export type { MediaType, PortfolioItem };
export { CATEGORY_LABELS };

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export function getSortedPortfolio(): PortfolioItem[] {
  if (!fs.existsSync(portfolioDirectory)) return [];
  const fileNames = fs.readdirSync(portfolioDirectory);
  const items = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: data.slug as string,
        title: data.title as string,
        category: data.category as string,
        categoryLabel: CATEGORY_LABELS[data.category as string] ?? (data.category as string),
        mediaType: data.mediaType as MediaType,
        mediaUrl: data.mediaUrl as string,
        stack: (data.stack as string[]) ?? [],
        role: data.role as string,
        summary: data.summary as string,
        highlight: data.highlight as string,
        order: (data.order as number) ?? 99,
      };
    });

  return items.sort((a, b) => a.order - b.order);
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return getSortedPortfolio().find((item) => item.slug === slug);
}
