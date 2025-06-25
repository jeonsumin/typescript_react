import { Post, PostState } from './model/types'
import postReducer from './model/post-slice'
import { fetchPosts } from './model/thunks'

export type { Post, PostState }

export { fetchPosts, postReducer}
