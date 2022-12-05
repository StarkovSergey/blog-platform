import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import style from './Blogs.module.css'

import { Breadcrumbs, LinearProgress, ShowMoreButton } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { Paths } from 'common/routes'
import {
  BlogItem,
  fetchBlogs,
  resetBlogsState,
  selectBlogs,
  selectBlogsPagesCount,
  selectBlogsPageSize,
  selectBlogsStatus,
} from 'features/Blogs'
import { MainSection } from 'layout/MainSection/MainSection'

export const Blogs = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectBlogsStatus)
  const blogs = useAppSelector(selectBlogs)
  const pagesCount = useAppSelector(selectBlogsPagesCount)
  const pageSize = useAppSelector(selectBlogsPageSize)
  const location = useLocation()

  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    dispatch(fetchBlogs({ pageNumber }))
  }, [pageNumber])

  useEffect(() => {
    dispatch(resetBlogsState())
  }, [location])

  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
  ]

  const isButtonShow = blogs.length < (pagesCount - 1) * pageSize + 1 && blogs.length !== 0

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' && <LinearProgress />}
      <ul className={style.list}>
        {blogs.map(blog => {
          return <BlogItem key={blog.id} blog={blog} />
        })}
      </ul>

      {isButtonShow && (
        <ShowMoreButton
          onClick={() => setPageNumber(pageNumber + 1)}
          className={style['show-more-button']}
          disabled={status === 'loading'}
        >
          Show more
        </ShowMoreButton>
      )}
    </MainSection>
  )
}
