/* eslint-disable node/no-missing-import */
import { configureStore } from '@reduxjs/toolkit'
import personalInfoReducer from '@/redux/slices/persionalSlice'
import planReducer from '@/redux/slices/planSlice'
import addOnsReducer from '@/redux/slices/addOnsSlice'

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    plan: planReducer,
    addons: addOnsReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
