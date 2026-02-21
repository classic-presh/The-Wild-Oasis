import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSettingMutation, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Setting edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { updateSettingMutation, isUpdating };
}
