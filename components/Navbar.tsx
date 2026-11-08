import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-2 bg-blue-100 p-4 text-slate-900 sm:flex-row sm:gap-4 dark:bg-blue-900 dark:text-white">
      <Link href="/">Accueil</Link>
      <Link href="/hello/world">Hello world</Link>
      <Link href="/cv">CV</Link>
      <Link href="/login">Connexion</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}