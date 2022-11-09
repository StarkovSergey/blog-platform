import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'

import { blogsReducer } from '../features/Blogs'

const rootReducer = combineReducers({
  blogs: blogsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>
