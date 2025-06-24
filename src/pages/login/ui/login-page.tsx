import { AuthForm } from 'features/login'
import { useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { Navigate } from 'react-router-dom'
import { ROUTES } from 'shared/config'

export const LoginPage = () => {
  const { user } = useSelector((state: RootState) => state.user)

  if (user?.username) {
    return (
      <Navigate
        to={ROUTES.HOME}
        replace
      />
    )
  }

  return (
    <>
      <AuthForm />
    </>
  )
}
