import Field from '../../../components/Field'
import Button from '../../../components/Button'
import { createPost } from '../../../lib/blog'

export default function NewBlogPostPage() {
  return (
    <main className="mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-2xl font-bold">Nouvel article</h1>

      <form action={createPost} className="space-y-4">
        <Field label="Titre" type="text" name="title" />
        <textarea name="content" className="rounded border p-2" rows={5} />
        <Button type="submit">Publier</Button>
      </form>
    </main>
  )
}