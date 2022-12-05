import { instance } from 'common/api-instances/basic-instance'
import { Post } from 'common/types'

export const postsAPI = {
  getPosts(params: GetPostsParams = {}) {
    return instance.get<GetPostsResponse>('posts', { params })
  },
}

// types
export type GetPostsParams = {
  pageNumber?: number
  pageSize?: number
  sortBy?: keyof Post
  sortDirection?: 'asc' | 'desc'
}

type GetPostsResponse = {
  pagesCount: number
  page: number
  pageSize: number
  totalCount: number
  items: Post[]
}
