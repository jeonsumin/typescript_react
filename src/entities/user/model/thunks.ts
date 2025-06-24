import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, getUserFromLocalStorage, removeUserFromLocalStorage, setUserToLocalStorage } from 'entities/user'

export const login = createAsyncThunk('auth/login', async (payload: { username: string, password: string }, thunkAPI) => {
  try {
    const user = await loginUser(payload.username, payload.password)
    setUserToLocalStorage(user)
    return user
  } catch (e: any) {
    console.error(e)
    return thunkAPI.rejectWithValue(e.message)
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {
  removeUserFromLocalStorage()
})

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, thunkAPI) => {
  try {
    const user = getUserFromLocalStorage()
    if (!user) throw new Error('Not authentication')
    return { user }
  } catch(error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
})