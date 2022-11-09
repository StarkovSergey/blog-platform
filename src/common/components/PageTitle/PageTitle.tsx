import React, { ReactNode } from 'react'

import style from './PageTitle.module.css'

type PropsType = {
  children: ReactNode
  className?: string
}

export const PageTitle = ({ children, className, ...props }: PropsType) => {
  return (
    <h1 className={`${style.title} ${className}`} {...props}>
      {children}
    </h1>
  )
}
