
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../firebase";

export const medicApi = createApi({
  reducerPath: 'medicApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => "category.json",
    }),
    getMedics: builder.query({
      query: () => "Medics.json",
    }),
    getMedicsByCategory: builder.query({
      query: category =>
        `Medics.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProfileImage: builder.query({
      query: localId => `profileImages/${localId}.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profileImages/${localId}.json`,
        method: 'PUT',
        body: {
          image: image,
        },
      }),
    }),
  }),
});
export const {
  useGetCategoryQuery,
  useGetMedicsQuery,
  useGetMedicsByCategoryQuery,
  useGetProfileImageQuery,
  usePostProfileImageMutation,
} = medicApi
