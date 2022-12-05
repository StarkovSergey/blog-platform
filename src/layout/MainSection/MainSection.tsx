import React, { ReactNode } from 'react'

import style from './MainSection.module.css'

interface PropsType {
  children?: ReactNode
}

export const MainSection = ({ children, ...props }: PropsType) => {
  return <section className={style.section}>{children}</section>
}
