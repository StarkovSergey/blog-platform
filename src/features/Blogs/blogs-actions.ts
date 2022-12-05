import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { blogsAPI, GetBlogsParamsType } from './blogs-api'

import { Blog } from 'common/types'

export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (params: GetBlogsParamsType = {}, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.getBlogs(params)

      return response.data
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return rejectWithValue(e.message)
      }
    }
  }
)
