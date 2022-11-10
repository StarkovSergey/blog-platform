import React from 'react'

import { PostTitle } from '../PostTitle/PostTitle'

import style from './PostDescriptionWithBlog.module.css'

type PropsType = {
  title: string
}

export const PostDescriptionWithBlog = ({ title }: PropsType) => {
  return (
    <div>
      <PostTitle>{title}</PostTitle>
    </div>
  )
}
