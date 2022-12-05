import { AppRootState } from '../../app/store'

export const selectBlogsStatus = (state: AppRootState) => state.blogs.status
export const selectBlogs = (state: AppRootState) => state.blogs.blogs
export const selectBlogsPageSize = (state: AppRootState) => state.blogs.pageSize
export const selectBlogsPagesCount = (state: AppRootState) => state.blogs.pagesCount
