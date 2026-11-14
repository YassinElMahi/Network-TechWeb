'use server'

import { db } from '@/db'
import { usersTable } from '@/db/schema'

export async function registerUser(form: FormData) {
  const email = String(form.get('email') ?? '').trim().toLowerCase()

  if (!email) return

  await db.insert(usersTable).values({ email }).onConflictDoNothing()
}
