// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a schema for each collection
const postSchema = z.object({
  draft: z.boolean(),
  title: z.string(),
  snippet: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  bigImg: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  authorImg: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  publishDate: z.string().transform((str) => new Date(str)),
  author: z.string().default('Pimjolabs'),
  comments: z.string(),
  views: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  postDetails: z.object({
    paraOne: z.string(),
    paraTwo: z.string(),
    title: z.string(),
    paraThree: z.string(),
    titleTwo: z.string().optional(),
    paraFour: z.string().optional(),
    paraFive: z.string().optional(),
  }),
  quotes: z
    .object({
      quote: z.string(),
      author: z.string(),
    })
    .optional(),
});

// Define collections
const blog = defineCollection({
  type: 'content',
  schema: postSchema,
});

const about = defineCollection({
  type: 'content',
  schema: postSchema,
});

// 3. Export collections
export const collections = {
  blog,
  about,
};
