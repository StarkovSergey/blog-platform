import { createSlice } from '@reduxjs/toolkit'

import { RequestStatus } from '../../common/types'

import { fetchBlogs } from './blogs-actions'
import { Blog } from './blogs-api'

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as RequestStatus,
    blogs: [] as Blog[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload!.blogs
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
