'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type Post = {
  id: number
  title: string
  content: string
}

const posts: Post[] = []

export async function getPosts() {
  return posts
}

export async function getPost(id: number) {
  return posts.find((post) => post.id === id)
}

export async function createPost(form: FormData) {
  const title = String(form.get('title') ?? '').trim()
  const content = String(form.get('content') ?? '').trim()

  if (!title || !content) return

  posts.push({
    id: Date.now(),
    title,
    content,
  })
}

export async function editPost(id: number, form: FormData) {
  const post = await getPost(id)
  const title = String(form.get('title') ?? '').trim()
  const content = String(form.get('content') ?? '').trim()

  if (!post || !title || !content) return

  post.title = title
  post.content = content
  revalidatePath('/blog')
  revalidatePath(`/blog/${id}`)
  redirect(`/blog/${id}`)
}

export async function deletePost(id: number) {
  const index = posts.findIndex((post) => post.id === id)
  if (index === -1) return

  posts.splice(index, 1)

  revalidatePath('/blog')
  revalidatePath(`/blog/${id}`)
  redirect('/blog')
}