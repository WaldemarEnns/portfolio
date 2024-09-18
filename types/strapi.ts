export type Post = {
  id: number;
  Title: string;
  Content: any;
  slug: string;
  publishedAt: string|null;
  createdAt: string;
  updatedAt: string;
  locale: string;
}