import { FormEvent, useState } from 'react'
import { useLogin } from 'features/login'

export const AuthForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { loginUser, isLoading } = useLogin()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    loginUser(email, password)
  }
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            disabled={isLoading}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">password</label>
          <input
            disabled={isLoading}
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type={'submit'}>Login</button>
      </form>
    </>
  )
}
