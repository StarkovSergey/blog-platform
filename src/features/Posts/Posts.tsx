import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { PostItem } from './PostItem/PostItem'
import { fetchPosts } from './posts-actions'
import { resetPostsState } from './posts-slice'
import style from './Posts.module.css'
import {
  selectPostPageSize,
  selectPosts,
  selectPostsPageCount,
  selectPostsStatus,
} from './selectors'

import { Breadcrumbs, LinearProgress, ShowMoreButton } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { Paths } from 'common/routes'
import { MainSection } from 'layout/MainSection/MainSection'

export const Posts = () => {
  const status = useAppSelector(selectPostsStatus)
  const posts = useAppSelector(selectPosts)
  const pagesCount = useAppSelector(selectPostsPageCount)
  const pageSize = useAppSelector(selectPostPageSize)
  const dispatch = useAppDispatch()
  const [pageNumber, setPageNumber] = useState(1)

  const location = useLocation()

  useEffect(() => {
    dispatch(fetchPosts({ pageNumber }))
  }, [pageNumber])

  useEffect(() => {
    dispatch(resetPostsState())
  }, [location])

  const breadcrumbs = [
    {
      title: 'Posts',
      link: Paths.Posts,
    },
  ]

  const isButtonShow = posts.length !== 0 && posts.length < (pagesCount - 1) * pageSize + 1

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' && <LinearProgress />}

      <div className={style['content-box']}>
        <ul className={style.grid}>
          {posts.map(post => {
            return <PostItem key={post.id} post={post} />
          })}
        </ul>
      </div>
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
