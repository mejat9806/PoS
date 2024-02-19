import { useQuery } from "@tanstack/react-query";
import { getTodayOrderforWidget } from "../Orders/getOrder";

function useTodayActivityWidget() {
  const {
    data: TodayOrderforWidget,
    isLoading: isTodayActivityWidget,
    error,
  } = useQuery({
    queryKey: ["todayActivityForWidget"],
    queryFn: getTodayOrderforWidget,
  });
  if (error) {
    throw new Error(error.message);
  }
  return { TodayOrderforWidget, isTodayActivityWidget };
}
export default useTodayActivityWidget;
