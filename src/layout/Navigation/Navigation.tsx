import React from 'react'

import { NavLink } from 'react-router-dom'

import style from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul className={style['nav-list']}>
        <li>
          <NavLink to={'blogs'}>Blogs</NavLink>
        </li>
        <li>
          <NavLink to={'posts'}>Posts</NavLink>
        </li>
      </ul>
    </nav>
  )
}
