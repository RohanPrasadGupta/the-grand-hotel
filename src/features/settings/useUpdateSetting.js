import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editSettingsApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryCient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => editSettingsApi(id, data),
    onSuccess: () => {
      toast.success("Setting Updated");
      queryCient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
