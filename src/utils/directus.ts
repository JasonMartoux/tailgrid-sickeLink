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

const directus = createDirectus<Schema>('https://admin.sickelink.com/')
  .with(rest({
    onRequest: (options) => {
      // Augmenter le timeout à 30 secondes
      options.signal = AbortSignal.timeout(30000);
      return options;
    }
  }));

export const fetchWithFallback = async <T>(
  request: Promise<T>,
  fallback: T
): Promise<T> => {
  try {
    const result = await Promise.race([
      request,
      new Promise<T>((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 30000)
      )
    ]);
    return result || fallback;
  } catch (error) {
    console.error('Erreur lors de la requête Directus:', error);
    return fallback;
  }
};

export default directus;
