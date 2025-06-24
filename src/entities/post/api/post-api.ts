import { axiosInstance } from 'shared/api'
import { Post } from 'entities/post'

export const PostApi = async () => {
  const res = await axiosInstance.get<Post[]>('/posts', {})
  const posts = res.data
  if (!posts) throw new Error('')
  return posts
}
