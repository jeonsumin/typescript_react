export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

export type PostState = {
  isLoading: boolean
  post: Post[] | null
}
