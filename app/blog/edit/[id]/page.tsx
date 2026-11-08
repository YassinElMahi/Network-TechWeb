import { notFound } from 'next/navigation'
import { editPost, getPost } from '../../../../lib/blog'

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await getPost(Number(id))

  if (!post) notFound()

  const savePost = editPost.bind(null, post.id)

  return (
  <main className="mx-auto max-w-xl px-4 py-8">
    <h1 className="mb-6 text-2xl font-bold">Modifier l’article</h1>

    <form action={savePost} className="space-y-5">
      <label className="block">
        <span className="mb-2 block font-medium">Titre</span>
        <input
          name="title"
          defaultValue={post.title}
          className="w-full rounded border border-gray-500 px-3 py-2"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block font-medium">Contenu</span>
        <textarea
          name="content"
          defaultValue={post.content}
          rows={6}
          className="w-full rounded border border-gray-500 px-3 py-2"
          required
        />
      </label>

      <button
        type="submit"
        className="rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-600"
      >
        Enregistrer
      </button>
    </form>
  </main>
)
}