import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { isLoading, users, error };
}
