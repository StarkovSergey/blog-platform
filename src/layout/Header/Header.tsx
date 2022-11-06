import React from 'react'

import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <h1 className={style.title}>Blogger Platform</h1>
      </div>
    </header>
  )
}
