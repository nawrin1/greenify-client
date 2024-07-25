import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://greenify-server.vercel.app",
  }),
  tagTypes: ["product"],

  endpoints: () => ({}),
});
