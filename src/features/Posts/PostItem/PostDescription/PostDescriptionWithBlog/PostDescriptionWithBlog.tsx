import React from 'react'

import castleImage from '../../../../../assets/images/placeholders/castle.svg'
import { getDate } from '../../../../../common/utils'
import { PostTitle } from '../PostTitle/PostTitle'

import style from './PostDescriptionWithBlog.module.css'

type PropsType = {
  title: string
  description: string
  date: string
}

export const PostDescriptionWithBlog = ({ title, description, date }: PropsType) => {
  return (
    <div className={style.box}>
      <div className={style.image}>
        <img src={castleImage} alt="blog picture" />
      </div>
      <div>
        <PostTitle className={style.title}>{title}</PostTitle>
        <p className={style.description}>{description}</p>
        <time className={style.date} dateTime={date}>
          {getDate(date)}
        </time>
      </div>
    </div>
  )
}
