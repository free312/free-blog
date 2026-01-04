import Link from 'next/link';
import { getPosts } from '../posts/posts';
import { Post } from '../types/blog';

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">我的博客</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post: Post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-2 text-sm text-gray-500">{post.date}</div>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
