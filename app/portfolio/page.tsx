import { Suspense } from 'react'
import { addProject, getProjects } from '@/lib/projects'

export default function PortfolioPage() {
  return (
    <main>
      <h1>Mes projets</h1>

      <form action={addProject}>
        <p>
          <label htmlFor="title">Titre</label>
          <input id="title" name="title" required />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" required />
        </p>
        <button type="submit">Ajouter le projet</button>
      </form>

      <Suspense fallback={<p>Chargement des projets…</p>}>
        <ProjectList />
      </Suspense>
    </main>
  )
}

async function ProjectList() {
  const projects = await getProjects()

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <strong>{project.title}</strong>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  )
}