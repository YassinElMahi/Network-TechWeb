'use server'

import { asc, eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { db } from '@/db'
import { postsTable } from '@/db/schema'

export async function getPosts() {
  return db.select().from(postsTable).orderBy(asc(postsTable.id))
}

export async function getPost(id: number) {
  const [post] = await db.select().from(postsTable).where(eq(postsTable.id, id))
  return post
}

export async function createPost(form: FormData) {
  const title = String(form.get('title') ?? '').trim()
  const content = String(form.get('content') ?? '').trim()

  if (!title || !content) return

  await db.insert(postsTable).values({ title, content })
  revalidatePath('/blog')
}

export async function editPost(id: number, form: FormData) {
  const title = String(form.get('title') ?? '').trim()
  const content = String(form.get('content') ?? '').trim()

  if (!title || !content) return

  const [updatedPost] = await db
    .update(postsTable)
    .set({ title, content })
    .where(eq(postsTable.id, id))
    .returning({ id: postsTable.id })

  if (!updatedPost) return

  revalidatePath('/blog')
  revalidatePath(`/blog/${id}`)
  redirect(`/blog/${id}`)
}

export async function deletePost(id: number) {
  const [deletedPost] = await db
    .delete(postsTable)
    .where(eq(postsTable.id, id))
    .returning({ id: postsTable.id })

  if (!deletedPost) return

  revalidatePath('/blog')
  revalidatePath(`/blog/${id}`)
  redirect('/blog')
}