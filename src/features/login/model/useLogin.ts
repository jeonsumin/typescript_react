import { AppDispatch } from 'app/store'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from 'entities/user'

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch()
  const { isLoading } = useSelector((state: RootState) => state.user)

  const loginUser = (username: string, password: string) => {
    dispatch(login({ username, password }))
  }

  const logoutUser = () => {
    dispatch(logout())
  }

  return { loginUser, logoutUser, isLoading }
}
