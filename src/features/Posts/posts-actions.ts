import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppRootState } from '../../app/store'

import { GetPostsParams, postsAPI } from './posts-api'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (params: GetPostsParams = {}, { rejectWithValue, getState }) => {
    try {
      const pageSize = (getState() as AppRootState).posts.pageSize
      const response = await postsAPI.getPosts({
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
