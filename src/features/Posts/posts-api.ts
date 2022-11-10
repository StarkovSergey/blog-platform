import { instance } from '../../common/api-instances/basic-instance'

export const postsAPI = {
  getPosts() {
    return instance.get<GetPostsResponse>('posts')
  },
}

// types
type GetPostsResponse = {
  pagesCount: 2
  page: 1
  pageSize: 10
  totalCount: 13
  items: Post[]
}

export interface Post {
  title: string
  shortDescription: string
  content: string
  blogId: string
  blogName: string
  createdAt: string
  id: string
}
