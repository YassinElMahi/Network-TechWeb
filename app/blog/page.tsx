import Link from 'next/link'
import { getPosts } from '../../lib/blog'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main>
      <h1 className="text-2xl font-bold">Blog</h1>

    <Link
    href="/blog/new"
     className="my-3 inline-block rounded bg-blue-700 px-3 py-2 text-white"
    >
    + Nouvel article
    </Link>

    <ul className="list-disc pl-6">
        {posts.map((post) => (
        <li key={post.id}>
        <Link href={`/blog/${post.id}`} className="underline">
        {post.title}
        </Link>
        </li>
        ))}
    </ul>
    </main>
  )
}
