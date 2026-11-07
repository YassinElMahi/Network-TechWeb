import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...buttonProps }: ButtonProps) {
  return (
    <button className="rounded bg-blue-900 px-4 py-2 text-white" {...buttonProps}>
      {children}
    </button>
  )
}