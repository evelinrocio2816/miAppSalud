import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, authUrl } from "../firebase";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: authUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signUp?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `accounts:signInWithPassword?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation } = AuthApi;