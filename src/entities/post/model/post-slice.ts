import { PostState } from 'entities/post/model/types'
import { createSlice } from '@reduxjs/toolkit'
import { fetchPosts } from 'entities/post/model/thunks'

const initialState: PostState = {
  isLoading: false,
  post: [],
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.post = action.payload
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false
        state.post = null;
      })
  },
})

export default postSlice.reducer;