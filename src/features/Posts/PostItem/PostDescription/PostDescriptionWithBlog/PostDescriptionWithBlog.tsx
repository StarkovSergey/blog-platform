import React from 'react'

import { Link } from 'react-router-dom'

import castleImage from '../../../../../assets/images/placeholders/castle.svg'
import { Paths } from '../../../../../common/routes'
import { Post } from '../../../../../common/types'
import { getDate } from '../../../../../common/utils'
import { PostTitle } from '../PostTitle/PostTitle'

import style from './PostDescriptionWithBlog.module.css'

type PropsType = {
  post: Post
}

export const PostDescriptionWithBlog = ({ post }: PropsType) => {
  return (
    <div className={style.box}>
      <div className={style.image}>
        <img src={castleImage} alt="blog picture" />
      </div>
      <div>
        <Link to={`${Paths.Posts}/${post.id}`}>
          <PostTitle className={style.title}>{post.title}</PostTitle>
        </Link>
        <p className={style.description}>{post.shortDescription}</p>
        <time className={style.date} dateTime={post.createdAt}>
          {getDate(post.createdAt)}
        </time>
      </div>
    </div>
  )
}
