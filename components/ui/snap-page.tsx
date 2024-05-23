
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SnapPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const SnapPage: React.FC<SnapPageProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('snap-page', className)}
      style={{
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        overflowY: 'scroll',
        height: '100vh'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export interface SnapPageSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const SnapPageSection: React.FC<SnapPageSectionProps> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={cn('snap-page-section', className)}
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        height: '100vh',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export { SnapPage, SnapPageSection }