// 클라이언트 컴포넌트에서도 안전하게 쓸 수 있는 타입/유틸 (fs 의존 없음)

export type MediaType = 'youtube' | 'appstore' | 'live-demo';

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  mediaType: MediaType;
  mediaUrl: string;
  stack: string[];
  role: string;
  summary: string;
  highlight: string;
  order: number;
}

export const CATEGORY_LABELS: Record<string, string> = {
  'e-commerce': 'E-Commerce',
  analytics: 'Analytics',
  'ai-commerce': 'AI × Commerce',
  'data-viz': 'Data Viz',
  'ai-llm': 'AI / LLM',
  mobile: 'iOS App',
  'frontend-ux': 'Frontend UX',
  wms: 'WMS / 물류',
};

export function getYoutubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
}
