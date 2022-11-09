import React, { ReactNode } from 'react'

import { PageTitle } from '../../common/components/PageTitle/PageTitle'

import style from './MainSection.module.css'

interface PropsType {
  title: string
  children?: ReactNode
}

export const MainSection = ({ title, children, ...props }: PropsType) => {
  return (
    <section className={style.section}>
      <PageTitle className={style.title}>{title}</PageTitle>
      {children}
    </section>
  )
}
