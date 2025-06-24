import { Post, PostState } from './model/types'
import postReducer from './model/postSlice'
import { fetchPosts } from './model/thunck'

export type { Post, PostState }

export { fetchPosts, postReducer}
