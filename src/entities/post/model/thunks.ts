import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostApi } from 'entities/post/api/post-api'

export const fetchPosts = createAsyncThunk('post/fetchPosts',async (_, thunkAPI) => {
    try {
      return await PostApi()
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.message)
    }
  },
)