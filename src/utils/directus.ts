import { createDirectus, rest } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
  email: string;
};

type Page = {
  title: string;
  content: string;
  mainImg: string;
  sideImg: string;
  Category: Category;
};

type Category = {
  title: string;
  description: string;
  pages: Page[];
};

type Schema = {
  global: Global;
  Categories: Category[];
  Pages: Page[];
};

const directus = createDirectus<Schema>('https://admin.sickelink.com/').with(rest());

export default directus;
