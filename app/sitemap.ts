import { getBlogPosts } from 'db/blog';

export default async function sitemap() {
  
  const blogs = getBlogPosts().map((post) => ({
    url: `https://vadimghedreutan.io/devlabs/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/projects', '/devlabs'].map(
    (route) => ({
      url: `https://vadimghedreutan.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}