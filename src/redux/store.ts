import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from './features/productSlice'
export const store=configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        product:productReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch