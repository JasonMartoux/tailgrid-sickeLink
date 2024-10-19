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

type Post = {
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string
  slug: string;
}

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
}

const directus = createDirectus<Schema>('https://back.mrtx.tech/').with(rest());

export default directus;