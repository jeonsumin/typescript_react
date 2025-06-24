import { combineReducers } from '@reduxjs/toolkit'
import { postReducer } from 'entities/post'
import { useReducer } from 'entities/user'

export const rootReducer = combineReducers({
  user: useReducer,
  post: postReducer,
})
