import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createNewCabinApi } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryCient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createNewCabinApi,
    onSuccess: () => {
      toast.success("New Cabin created");
      queryCient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
