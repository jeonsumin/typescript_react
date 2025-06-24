import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'app/store'
import { useEffect } from 'react'
import { fetchPosts } from 'entities/post'

export const usePostList = () => {
  const dispatch: AppDispatch = useDispatch()
  const { post, isLoading } = useSelector((state: RootState) => state.post)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return { post, isLoading }
}
