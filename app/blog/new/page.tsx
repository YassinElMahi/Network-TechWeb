import Field from '../../../components/Field'
import Button from '../../../components/Button'

export default function NewBlogPostPage() {
  return (
    <main className="mx-auto max-w-lg p-4">
      <h1 className="mb-4 text-2xl font-bold">Nouvel article</h1>

      <form className="space-y-4">
        <Field label="Titre" type="text" />

        <label className="flex flex-col gap-1">
          Contenu
          <textarea className="rounded border p-2" rows={5} />
        </label>

        <Button type="button">Publier</Button>
      </form>
    </main>
  )
}