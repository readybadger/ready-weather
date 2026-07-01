import type { ChangeEvent } from 'react'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input = ({
  onChangeText,
  onChange,
  className,
  ...inputProps
}: InputProps & {
  onChangeText?: (value: string) => void
}) => {
  const onInputChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    onChange?.(event)
    onChangeText?.(event.target.value)
  }

  return (
    <input
      {...inputProps}
      onChange={onInputChange}
      className={`border-stone-600 border-solid border-2 rounded-sm ${className || ''}`}
    />
  )
}
