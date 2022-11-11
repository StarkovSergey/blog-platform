import React from 'react'

import { Link } from 'react-router-dom'

import dragonPlaceholder from '../../../assets/images/placeholders/dragon.jpg'
import { Paths } from '../../../common/routes'
import { Blog } from '../../../common/types'

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
        <h3 className={style.title}>
          <Link to={`${Paths.Blogs}/${blog.id}`}>{blog.name}</Link>
        </h3>
        <p className={style.description}>{blog.youtubeUrl}</p>
      </div>
    </li>
  )
}
