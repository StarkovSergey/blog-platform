import { createSlice } from '@reduxjs/toolkit'

import { Blog, RequestStatus } from '../../common/types'

import { fetchBlogs } from './blogs-actions'

const slice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [] as Blog[],
    pageSize: 6,
    pagesCount: 1,
    status: 'idle' as RequestStatus,
    error: null as null | string,
  },
  reducers: {
    resetBlogsState(state) {
      state.blogs = []
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.pageSize = action.payload!.data.pageSize
      state.pagesCount = action.payload!.data.pagesCount

      if (action.payload!.isShowMore) {
        state.blogs = [...state.blogs, ...action.payload!.data.items]
      } else {
        state.blogs = action.payload!.data.items
      }
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

export const blogsReducer = slice.reducer
export const { resetBlogsState } = slice.actions
