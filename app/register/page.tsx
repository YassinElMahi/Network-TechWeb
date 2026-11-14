import { registerUser } from '@/lib/register'

export default function RegisterPage() {
  return (
    <main>
      <h1>Inscription</h1>

      <form action={registerUser}>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required />
        <button type="submit">Créer un utilisateur</button>
      </form>
    </main>
  )
}