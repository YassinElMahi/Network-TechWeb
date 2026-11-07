import type { ReactNode } from 'react'

type CVEntryProps = {
  title: string
  employer: string
  children?: ReactNode
}

export default function CVEntry({ title, employer, children }: CVEntryProps) {
  return (
    <div>
      <h3>{title}, {employer}</h3>
      {children}
    </div>
  )
}