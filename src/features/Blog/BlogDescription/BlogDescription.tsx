import React from 'react'

import dragonImage from '../../../assets/images/placeholders/dragon.jpg'
import { Blog } from '../../../common/types'
import { getDate } from '../../../common/utils'

import style from './BlogDescription.module.css'

type PropsType = {
  blog: Blog
}

export const BlogDescription = ({ blog }: PropsType) => {
  return (
    <div className={style.description}>
      <div className={style.image}>
        <img src={dragonImage} alt="blog image" />
      </div>
      <div>
        <h2 className={`section-title`}>{blog.name}</h2>
        <p>
          Blog creation date:&nbsp;
          <time dateTime={blog.createdAt}>{getDate(blog.createdAt)}</time>
        </p>
        <p>
          <b>{blog.youtubeUrl}</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam, amet aut beatae dicta, ea et excepturi explicabo iusto labore libero magni
          obcaecati perspiciatis possimus quidem repellat, sint totam vero vitae!
        </p>
        <button>Show more</button>
      </div>
    </div>
  )
}