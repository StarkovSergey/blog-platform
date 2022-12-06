import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import style from './Blogs.module.css'
import { sortSelectOptions } from './sort-select-options'

import { Breadcrumbs, LinearProgress, Search, Select, ShowMoreButton } from 'common/components'
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
  const [sort, setSort] = useState(sortSelectOptions[0])

  useEffect(() => {
    dispatch(
      fetchBlogs({
        params: {
          pageNumber,
          sortBy: sort.value.sortBy,
          sortDirection: sort.value.sortDirection,
        },
      })
    )
  }, [sort])

  const showMoreButtonHandler = () => {
    const newPageNumber = pageNumber + 1

    setPageNumber(newPageNumber)
    dispatch(
      fetchBlogs({
        params: {
          pageNumber: newPageNumber,
          sortBy: sort.value.sortBy,
          sortDirection: sort.value.sortDirection,
        },
        isShowMore: true,
      })
    )
  }

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
      {status === 'loading' && <LinearProgress />}
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={style['sort-bar']}>
        <Search className={style.search} />
        <Select
          className={style.select}
          options={sortSelectOptions}
          value={sort}
          onChange={option => setSort(option)}
        />
      </div>
      <ul className={style.list}>
        {blogs.map(blog => {
          return <BlogItem key={blog.id} blog={blog} />
        })}
      </ul>

      {isButtonShow && (
        <ShowMoreButton
          onClick={showMoreButtonHandler}
          className={style['show-more-button']}
          disabled={status === 'loading'}
        >
          Show more
        </ShowMoreButton>
      )}
    </MainSection>
  )
}
