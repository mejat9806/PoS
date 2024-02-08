import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettings as updateApiSetting } from "./getSetting";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdatingSetting } = useMutation({
    mutationFn: updateApiSetting,
    onSuccess: () => {
      toast.success("Setting has been Edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateSetting, isUpdatingSetting };
}
