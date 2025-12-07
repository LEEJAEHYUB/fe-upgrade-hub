// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

async function getPost(slug: string) {
  const res = await fetch(`https://example.com/api/posts/${slug}`);
  if (!res.ok) return null;
  return res.json() as Promise<{ title: string; description: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">블로그 글: {params.slug}</h1>
      <p>이 페이지는 slug 기반 Dynamic Metadata를 사용합니다.</p>
    </main>
  );
}
