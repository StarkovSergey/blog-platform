import React from 'react'

import dragon from '../../../assets/images/placeholders/dragon.jpg'
import { Post } from '../posts-api'

import { PostDescriptionWithBlog } from './PostDescription/PostDescriptionWithBlog/PostDescriptionWithBlog'
import style from './PostItem.module.css'

type PropsType = {
  post: Post
}

export const PostItem = ({ post }: PropsType) => {
  return (
    <li>
      <div className={style.image}>
        <img src={dragon} alt="post cover" />
      </div>
      <PostDescriptionWithBlog
        title={post.title}
        description={post.shortDescription}
        date={post.createdAt}
      />
    </li>
  )
}
