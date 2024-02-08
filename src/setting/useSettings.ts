import { useQuery } from "@tanstack/react-query";
import { getSetting } from "./getSetting";

export function useSettings() {
  const { isLoading: isLoadingSetting, data: settingData } = useQuery({
    queryKey: ["settings"],
    queryFn: getSetting,
  });

  return { settingData, isLoadingSetting };
}
