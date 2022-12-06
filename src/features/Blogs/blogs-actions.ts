import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { blogsAPI, GetBlogsParams } from './blogs-api'

import { AppRootState } from 'app/store'

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (
    { params = {}, isShowMore = false }: { params: GetBlogsParams; isShowMore?: boolean },
    { rejectWithValue, getState }
  ) => {
    try {
      const pageSize = (getState() as AppRootState).blogs.pageSize
      const response = await blogsAPI.getBlogs({
        ...params,
        pageSize,
      })

      return {
        data: response.data,
        isShowMore,
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
