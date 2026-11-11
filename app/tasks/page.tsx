import { Suspense } from 'react'
import { addTask, editTask, getTasks, removeTask } from '@/lib/tasks'
import styles from './tasks.module.css'

export default function TasksPage() {
  return (
    <main className={styles.page}>
      <h1>Mes tâches</h1>

      <form action={addTask}>
        <input
          type="text"
          name="title"
          placeholder="Nouvelle tâche"
          required
        />
        <button type="submit">Ajouter</button>
      </form>

      <Suspense fallback={<p>Chargement des tâches…</p>}>
        <TaskList />
      </Suspense>
    </main>
  )
}

async function TaskList() {
  const tasks = await getTasks()

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <form action={editTask}>
            <input type="hidden" name="id" value={task.id} />

            <label>
              <input type="checkbox" name="done" defaultChecked={task.done} />
              {task.title}
            </label>

            <button type="submit">Enregistrer</button>
            <button type="submit" formAction={removeTask.bind(null, task.id)}>
              Supprimer
            </button>
          </form>
        </li>
      ))}
    </ul>
  )
}