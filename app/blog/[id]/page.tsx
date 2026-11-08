import Link from 'next/link'
import { notFound } from 'next/navigation'
import { deletePost, getPost } from '../../../lib/blog'

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(Number(id))

  if (!post) notFound()

 return (
  <main className="mx-auto max-w-2xl px-4 py-8">
    <article className="rounded-lg border border-gray-500 p-6">
      <h1 className="mb-4 border-b border-gray-500 pb-4 text-3xl font-bold">
        {post.title}
      </h1>

      <p className="whitespace-pre-wrap leading-relaxed">
        {post.content}
      </p>
    </article>

    <Link
      href={`/blog/edit/${post.id}`}
      className="mt-5 inline-block rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-600"
    >
      Modifier l’article
    </Link>
    
    <form action={deletePost.bind(null, post.id)} className="mt-3">
    <button
    type="submit"
    className="rounded bg-red-700 px-4 py-2 font-medium text-white hover:bg-red-600">Supprimer l’article</button>
    </form>
  </main>
)
}