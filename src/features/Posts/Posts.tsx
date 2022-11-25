import React, { useEffect } from 'react'

import { Breadcrumbs, Loader } from '../../common/components'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Paths } from '../../common/routes'
import { MainSection } from '../../layout/MainSection/MainSection'

import { PostItem } from './PostItem/PostItem'
import { fetchPosts } from './posts-actions'
import style from './Posts.module.css'
import { selectPosts, selectPostsStatus } from './selectors'

export const Posts = () => {
  const status = useAppSelector(selectPostsStatus)
  const posts = useAppSelector(selectPosts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const breadcrumbs = [
    {
      title: 'Posts',
      link: Paths.Posts,
    },
  ]

  return (
    <MainSection>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      {status === 'loading' ? (
        <Loader />
      ) : (
        <div className={style['content-box']}>
          <ul className={style.grid}>
            {posts.map(post => {
              return <PostItem key={post.id} post={post} />
            })}
          </ul>
        </div>
      )}
    </MainSection>
  )
}
