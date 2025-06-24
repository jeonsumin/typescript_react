import { axiosInstance } from 'shared/api'
import { User } from 'entities/user'

export const loginUser = async (username: string, password: string): Promise<User> => {
  const res = await axiosInstance.get<User[]>('/users', {
    params: {username,password}
  })

  const user = res.data[0]
  if(!user) throw new Error("Wrong id or password");

  return user;
}