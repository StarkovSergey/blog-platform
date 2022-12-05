import { createSlice } from '@reduxjs/toolkit'

import { Post, RequestStatus } from '../../common/types'

import { fetchPosts } from './posts-actions'

const slice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as Post[],
    pageSize: 6,
    pagesCount: 1,
    status: 'idle' as RequestStatus,
    error: null as null | string,
  },
  reducers: {
    resetPostsState(state) {
      state.posts = []
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload!.items]
      state.pageSize = action.payload!.pageSize
      state.pagesCount = action.payload!.pagesCount
    })
    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      (state, action) => {
        state.status = 'loading'
        state.error = null
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.status = 'succeeded'
        state.error = null
      }
    )
    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error.message
      }
    )
  },
})

export const postsReducer = slice.reducer
export const { resetPostsState } = slice.actions
