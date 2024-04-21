import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryCient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: (data) => {
      // console.log(editId, data);
      editCabinApi(editId, data);
    },
    onSuccess: () => {
      toast.success("Cabin Edited");
      queryCient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
