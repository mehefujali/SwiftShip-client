/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { columns } from "./components/UserTableColumns";
import { UserTable } from "./components/UserTable";

import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

export default function ManageUsers() {
  const { data, isLoading, isError, error } = useGetAllUsersQuery(undefined);

  const users = data?.data || [];

  if (isError) {
    return (
      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          
          {(error as any)?.data?.message || "Failed to load users."}
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold">Manage Users</h1>
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <h1 className="text-3xl font-bold">Manage Users</h1>
      <UserTable columns={columns} data={users} />
    </div>
  );
}