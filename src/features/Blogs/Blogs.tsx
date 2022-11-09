import React, { useEffect } from 'react'

import { MainSection } from '../../layout/MainSection/MainSection'

import { blogsAPI } from './blogs-api'

export const Blogs = () => {
  useEffect(() => {
    const blogs = blogsAPI.getBlogs()

    console.log(blogs)
  }, [])

  return <MainSection title="Blogs"></MainSection>
}
