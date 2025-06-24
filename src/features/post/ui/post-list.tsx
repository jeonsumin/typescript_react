import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'

export const PostList = () => {
  const dispatch = useDispatch()
  const { post, isLoading } = useSelector((state: RootState) => state.post)

  if (isLoading)
  return <></>
}
