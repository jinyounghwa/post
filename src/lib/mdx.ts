import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'content/claude-news');
const starsDirectory = path.join(process.cwd(), 'content/stars');

export interface NewsPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  contentHtml: string;
}

export interface StarRepo {
  name: string;
  link: string;
  description: string;
  reason: string;
}

export interface StarCategory {
  slug: string;
  title: string;
  category: string;
  date: string;
  repos: StarRepo[];
}

export function getSortedNews(): Omit<NewsPost, 'contentHtml'>[] {
  if (!fs.existsSync(newsDirectory)) return [];
  const fileNames = fs.readdirSync(newsDirectory);
  const allNews = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        tags: data.tags as string[],
        summary: data.summary as string,
      };
    });

  return allNews.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsPost(slug: string): Promise<NewsPost> {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    tags: data.tags as string[],
    summary: data.summary as string,
    contentHtml,
  };
}

export function getAllNewsSlugs(): string[] {
  if (!fs.existsSync(newsDirectory)) return [];
  const fileNames = fs.readdirSync(newsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getAllTags(): string[] {
  const news = getSortedNews();
  const tagSet = new Set<string>();
  news.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getStarCategories(): StarCategory[] {
  if (!fs.existsSync(starsDirectory)) return [];
  const fileNames = fs.readdirSync(starsDirectory);
  const allCategories = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(starsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const repos: StarRepo[] = [];
      const sections = content.split(/^## /m).filter(Boolean);

      for (const section of sections) {
        const lines = section.split('\n');
        const name = lines[0].trim();
        let link = '';
        let description = '';
        let reason = '';

        for (const line of lines.slice(1)) {
          const linkMatch = line.match(/\*\*링크:\*\*\s*(.*)/);
          const descMatch = line.match(/\*\*설명:\*\*\s*(.*)/);
          const reasonMatch = line.match(/\*\*왜 좋냐:\*\*\s*(.*)/);

          if (linkMatch) link = linkMatch[1].trim();
          if (descMatch) description = descMatch[1].trim();
          if (reasonMatch) reason = reasonMatch[1].trim();
        }

        if (name) {
          repos.push({ name, link, description, reason });
        }
      }

      return {
        slug,
        title: data.title as string,
        category: data.category as string,
        date: data.date as string,
        repos,
      };
    });

  return allCategories.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllStarRepos(): (StarRepo & { categorySlug: string; categoryTitle: string })[] {
  const categories = getStarCategories();
  const allRepos: (StarRepo & { categorySlug: string; categoryTitle: string })[] = [];

  categories.forEach((cat) => {
    cat.repos.forEach((repo) => {
      allRepos.push({
        ...repo,
        categorySlug: cat.slug,
        categoryTitle: cat.title,
      });
    });
  });

  return allRepos;
}
