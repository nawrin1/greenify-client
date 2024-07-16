import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import productReducer from './features/productSlice'
import cartReducer from './features/cartSlice'
export const store=configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        product:productReducer,
        cart:cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)

})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch