import React, { useEffect } from 'react'

import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { MainSection } from '../../layout/MainSection/MainSection'

import { fetchBlogs } from './blogs-actions'

export const Blogs = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.blogs.status)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return <MainSection title="Blogs">{status === 'loading' ? <Loader /> : <p>Blogs</p>}</MainSection>
}
