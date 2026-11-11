import { getPosts } from '../utils';

export async function GET() {
  const posts = await getPosts();
  const data = posts.map((p) => ({
    title: p.data.title,
    description: p.data.description,
    tags: p.data.tags,
    url: `/blog/${p.id}`,
  }));
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
}
