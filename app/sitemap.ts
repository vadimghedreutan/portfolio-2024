import { getBlogPosts } from 'db/blog';

export default async function sitemap() {
  
  const blogs = getBlogPosts().map((post) => ({
    url: `https://vadimghedreutan.io/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/projects', '/blog'].map(
    (route) => ({
      url: `https://vadimghedreutan.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}