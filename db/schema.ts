import { boolean, pgTable, serial, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})

export const postsTable = pgTable('posts', {
  id: serial().primaryKey(),
  title: text().notNull(),
  content: text().notNull(),
})

export const usersTable = pgTable('users', {
  id: serial().primaryKey(),
  email: text().notNull().unique(),
  passwordHash: text(),
})

export const projectsTable = pgTable('projects', {
  id: serial().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
})