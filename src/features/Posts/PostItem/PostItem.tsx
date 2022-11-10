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
      <div>
        <div>
          <img alt="avatar" />
        </div>
        <div>
          <p>{post.shortDescription}</p>
          <span>{post.createdAt}</span>
          <PostDescriptionWithBlog title={post.title} />
        </div>
      </div>
    </li>
  )
}
