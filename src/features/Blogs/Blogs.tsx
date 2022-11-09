import React, { useEffect } from 'react'

import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { MainSection } from '../../layout/MainSection/MainSection'

import { fetchBlogs } from './blogs-actions'

export const Blogs = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return <MainSection title="Blogs"></MainSection>
}
