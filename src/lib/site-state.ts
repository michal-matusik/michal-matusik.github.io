import { getCollection } from 'astro:content';

export async function getSiteVisibility() {
  const posts = await getCollection('writing', ({ data }) => !data.draft);
  const showWriting = posts.length >= 2;
  return { showWriting, showRSS: showWriting };
}
