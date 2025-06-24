import { useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { PostList } from 'widgets/post-list'

export function MainPage() {
  const post = useSelector((state:RootState) => state.post.post);

  return (
    <div>
      <h1>HOME</h1>
      <div>{post && <PostList />}</div>
    </div>
  )
}
