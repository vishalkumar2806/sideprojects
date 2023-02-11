import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './action/stateSlice'
import thunk from 'redux-thunk'
export const store = configureStore({
  reducer: {
    currentState: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

