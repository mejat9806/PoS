import { useQuery } from "@tanstack/react-query";
import { getTodayOrder } from "../Orders/getOrder";

function useTodayActivity() {
  const {
    data: todayActivity,
    isLoading: isTodayActivity,
    error,
  } = useQuery({
    queryKey: ["todayActivity"],
    queryFn: getTodayOrder,
  });
  if (error) {
    throw new Error(error.message);
  }
  return { todayActivity, isTodayActivity };
}

export default useTodayActivity;
