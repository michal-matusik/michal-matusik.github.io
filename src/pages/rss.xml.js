import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../config/site';

export async function GET(context) {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.published.getTime() - a.data.published.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.published,
        link: `/writing/${post.id}/`,
      })),
  });
}
