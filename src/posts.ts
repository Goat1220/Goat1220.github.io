import { getCollection } from 'astro:content';

/** 공개할 글을 최신순으로. 초안은 개발 서버에서만 포함한다. */
export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
