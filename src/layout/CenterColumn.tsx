import type React from 'react'

export const CenterColumn = ({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
}
