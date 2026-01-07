import { useRouter } from 'next/router';
import { getPostById } from '../../posts/posts';
// import { Post } from '../../types/blog';
import Link from 'next/link';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = getPostById(id as string);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">文章未找到</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← 返回博客首页
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← 返回博客首页
      </Link>
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <div className="text-sm text-gray-500">{post.date} · {post.author}</div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
        <div className="prose max-w-none">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>;
            } else if (line === '') {
              return <br key={index} />;
            } else {
              return <p key={index} className="mb-4">{line}</p>;
            }
          })}
        </div>
      </article>
    </div>
  );
}
