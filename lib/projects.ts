'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { projectsTable } from '@/db/schema'

export async function getProjects() {
  return db.select().from(projectsTable)
}

export async function addProject(form: FormData) {
  const title = String(form.get('title') ?? '').trim()
  const description = String(form.get('description') ?? '').trim()

  if (!title || !description) return

  await db.insert(projectsTable).values({ title, description })
  revalidatePath('/portfolio')
}