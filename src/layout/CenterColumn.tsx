import type React from 'react'

export const CenterColumn = ({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) => {
  return <div className={`max-w-5xl mx-auto px-6 ${className}`}>{children}</div>
}
