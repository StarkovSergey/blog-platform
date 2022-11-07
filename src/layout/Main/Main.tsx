import React from 'react'

import { Outlet } from 'react-router-dom'

import { Navigation } from '../Navigation'

export const Main = () => {
  return (
    <main>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </main>
  )
}
