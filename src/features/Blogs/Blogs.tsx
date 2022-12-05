import React, { useEffect, useState } from 'react'

import { BlogItem } from './BlogItem/BlogItem'
import { fetchBlogs } from './blogs-actions'
import style from './Blogs.module.css'
import { selectBlogs, selectBlogsPagesCount, selectBlogsStatus } from './selectors'

import { Breadcrumbs, LinearProgress } from 'common/components'
import { ShowMoreButton } from 'common/components/Button/ShowMoreButton/ShowMoreButton'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { Paths } from 'common/routes'
import { MainSection } from 'layout/MainSection/MainSection'

export const Blogs = () => {
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectBlogsStatus)
  const blogs = useAppSelector(selectBlogs)
  const pagesCount = useAppSelector(selectBlogsPagesCount)

  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    console.log(pageNumber)
    dispatch(fetchBlogs({ pageNumber }))
  }, [pageNumber])

  const breadcrumbs = [
    {
      title: 'Blogs',
      link: Paths.Blogs,
    },
  ]

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' && <LinearProgress />}
      <ul className={style.list}>
        {blogs.map(blog => {
          return <BlogItem key={blog.id} blog={blog} />
        })}
      </ul>

      {pageNumber < pagesCount && (
        <ShowMoreButton
          onClick={() => setPageNumber(pageNumber + 1)}
          className={style['show-more-button']}
        >
          Show more
        </ShowMoreButton>
      )}
    </MainSection>
  )
}
