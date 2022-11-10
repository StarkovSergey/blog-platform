import React from 'react'

import dragonPlaceholder from '../../../assets/images/placeholders/dragon.jpg'
import { Blog } from '../blogs-api'

import style from './BlogItem.module.css'

type PropsType = {
  blog: Blog
}

export const BlogItem = ({ blog }: PropsType) => {
  return (
    <li className={style.box}>
      <div className={style.image}>
        <img src={dragonPlaceholder} alt="blog image" />
      </div>
      <div>
        <h3 className={style.title}>{blog.name}</h3>
        <p className={style.description}>{blog.youtubeUrl}</p>
      </div>
    </li>
  )
}
