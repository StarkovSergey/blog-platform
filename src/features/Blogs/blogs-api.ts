import { instance } from '../../common/api-instances/basic-instance'

export const blogsAPI = {
  getBlogs() {
    return instance.get<GetBlogsResponse>('blogs')
  },
}

export type GetBlogsResponse = {
  pageCount: number
  page: number
  pageSize: number
  totalCount: number
  items: Blog[]
}

export type Blog = {
  name: string
  youtubeUrl: string
  createdAt: string
  id: string
}
