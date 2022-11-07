import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Blogs } from '../../features/Blogs/Blogs'
import { Posts } from '../../features/Posts/Posts'
import { Main } from '../../layout/Main'

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="blogs" />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  )
}
