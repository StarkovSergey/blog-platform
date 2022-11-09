import { createSlice } from '@reduxjs/toolkit'

import { RequestStatus } from '../../common/types/RequestStatus'

import { Blog } from './blogs-api'

const slice = createSlice({
  name: 'blogs',
  initialState: {
    status: 'idle' as RequestStatus,
    blogs: [] as Blog[],
    error: null as null | string,
  },
  reducers: {},
})

export const blogsReducer = slice.reducer
