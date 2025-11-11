import { apiSlice } from "../../api/apiSlice";
import  type { IUser } from "@/types";

type TGetAllUsersResponse = {
  success: boolean;
  message: string;
  data: IUser[];
};

type TBlockUserResponse = {
  success: boolean;
  message: string;
  data: IUser;
};

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TGetAllUsersResponse, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    blockUser: builder.mutation<TBlockUserResponse, string>({
      query: (userId) => ({
        url: `/users/${userId}/block`,
        method: "PATCH",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetAllUsersQuery, useBlockUserMutation } = userApi;