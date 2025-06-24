import { loginUser } from './api/UserApi'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from './lib/userLocalStorageAction'
import { User , UserState} from './model/types'
import useReducer from './model/userSlice'
import { login, logout, checkAuth } from './model/thunks'

export type { User , UserState}

export {
  loginUser,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
  useReducer,
  logout,
  login,
  checkAuth
}
