import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">欢迎来到我的博客</h1>
      <p className="text-lg mb-4">这是我的个人博客，分享我的学习和思考。</p>
      <Link 
        href="/blog" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        查看博客文章
      </Link>
    </div>
  );
}
