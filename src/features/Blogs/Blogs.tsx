import React, { useEffect } from 'react'

import { TextInput } from '../../common/components/TextInput/TextInput'
import { MainSection } from '../../layout/MainSection/MainSection'

import { blogsAPI } from './blogs-api'

export const Blogs = () => {
  useEffect(() => {
    const blogs = blogsAPI.getBlogs()

    console.log(blogs)
  }, [])

  return (
    <MainSection title="Blogs">
      <TextInput />
    </MainSection>
  )
}
