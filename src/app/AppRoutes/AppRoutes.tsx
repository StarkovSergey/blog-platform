import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Paths } from '../../common/routes'
import { Blogs } from '../../features/Blogs/Blogs'
import { Posts } from '../../features/Posts/Posts'
import { Main } from '../../layout/Main'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="blogs" />} />
          <Route path={Paths.Blogs} element={<Blogs />} />
          <Route path={Paths.Posts} element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}
