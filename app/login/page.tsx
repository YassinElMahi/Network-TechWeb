import Field from '../../components/Field'
import Button from '../../components/Button'

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-sm p-4">
      <h1 className="mb-4 text-2xl font-bold">Connexion</h1>

      <form className="space-y-4">
        <Field label="Adresse e-mail" type="email" />
        <Field label="Mot de passe" type="password" />
        <Button type="button">Se connecter</Button>
      </form>
    </main>
  )
}