import { instance } from 'common/api-instances/basic-instance'
import { Blog } from 'common/types'

export const blogsAPI = {
  getBlogs(params: GetBlogsParams = {}) {
    const { pageSize = 3 } = params

    return instance.get<GetBlogsResponse>('blogs', {
      params: {
        ...params,
        pageSize,
      },
    })
  },
}

export type GetBlogsResponse = {
  pagesCount: number
  page: number
  pageSize: number
  totalCount: number
  items: Blog[]
}

export type GetBlogsParams = {
  searchNameTerm?: string
  pageNumber?: number
  pageSize?: number
  sortBy?: keyof Blog
  sortDirection?: 'asc' | 'desc'
}
