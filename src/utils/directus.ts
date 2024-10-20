import { createDirectus, rest, } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
  email: string;
}

type Author = {
  name: string
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Article = {
  image: string;
  title: string;
  author: Author;
  category: Category;
  content: string;
  published_date: string
  slug: string;
}

type Category = {
  title: string;
  slug: string;
  posts: Article[];
}

type Schema = {
  article: Article[];
  global: Global;
  categories: Category[];
  pages: Page[];
}

const directus = createDirectus<Schema>('https://back.mrtx.tech/').with(rest());

export default directus;