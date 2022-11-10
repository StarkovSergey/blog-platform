import React, { useEffect } from 'react'

import { Loader } from '../../common/components/Loader/Loader'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { useAppSelector } from '../../common/hooks/useAppSelector'
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

  return (
    <MainSection title="Posts">
      {status === 'loading' ? (
        <Loader />
      ) : (
        <ul className={style.grid}>
          {posts.map(post => {
            return <PostItem key={post.id} post={post} />
          })}
        </ul>
      )}
    </MainSection>
  )
}
