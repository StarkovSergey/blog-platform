import React from 'react'

import { Link } from 'react-router-dom'

import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <Link to="/">
          <h1 className={style.title}>Blogger Platform</h1>
        </Link>
      </div>
    </header>
  )
}
