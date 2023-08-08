import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://vadimghedreutan.io/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/projects', '/blog'].map(
    (route) => ({
      url: `https://vadimghedreutan.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}