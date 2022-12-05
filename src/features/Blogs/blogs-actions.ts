import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppRootState } from '../../app/store'

import { blogsAPI, GetBlogsParams } from './blogs-api'

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (params: GetBlogsParams = {}, { rejectWithValue, getState }) => {
    try {
      const pageSize = (getState() as AppRootState).blogs.pageSize
      const response = await blogsAPI.getBlogs({
        ...params,
        pageSize,
      })

      return response.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
