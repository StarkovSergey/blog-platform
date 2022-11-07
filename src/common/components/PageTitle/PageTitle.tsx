import React, { ReactNode } from 'react'

import style from './PageTitle.module.css'

type PropsType = {
  children: ReactNode
}

export const PageTitle = ({ children }: PropsType) => {
  return <h1 className={style.title}>{children}</h1>
}
