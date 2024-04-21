import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../../services/apiUser";
import toast from "react-hot-toast";

export function useCreateuser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data);
      if (data && data.data.status === "success") {
        console.log(data.data.status);
        toast.success("You are sucessfully registered");
        queryClient.invalidateQueries({ queryKey: "users" });
      } else {
        toast.error("registration Failed");
      }
    },
    onError: () => toast.error("Registration failed"),
  });

  return { createUser, isCreating };
}
