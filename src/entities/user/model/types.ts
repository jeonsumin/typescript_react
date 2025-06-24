export interface User {
  id: number
  username: string
}

export interface UserState {
  isLoading: boolean
  user: User | null
}
