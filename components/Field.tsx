import type { InputHTMLAttributes } from 'react'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export default function Field({ label, ...inputProps }: FieldProps) {
  return (
    <label className="flex flex-col gap-1">
      {label}
      <input className="rounded border p-2" {...inputProps} />
    </label>
  )
}