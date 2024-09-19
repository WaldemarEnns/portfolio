export type Post = {
  id: number;
  Title: string;
  Content: any;
  slug: string;
  meta_title: string;
  meta_description: string;
  publishedAt: string|null;
  createdAt: string;
  updatedAt: string;
  locale: string;
}