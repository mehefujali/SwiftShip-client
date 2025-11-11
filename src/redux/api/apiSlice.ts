import { createApi, fetchBaseQuery, type RootState } from "@reduxjs/toolkit/query/react";


const baseUrl = "http://localhost:8080/api/v1";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Parcel"],
  endpoints: () => ({}),
});