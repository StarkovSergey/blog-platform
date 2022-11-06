import { createSlice } from '@reduxjs/toolkit'

const initialState: any = []

const slice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
})

export const blogsReducer = slice.reducer
