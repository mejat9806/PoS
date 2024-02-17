import { subDays } from "date-fns/subDays";
import { useSearchParams } from "react-router-dom";
import { getOrderByDate } from "../Orders/getOrder";
import { useQuery } from "@tanstack/react-query";

function useRecentOrder() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last")
    ? 1
    : Number(searchParams.get("last"));
  const date = subDays(new Date(), numDays).toISOString();
  const {
    isLoading: isLoadingDate,
    data: dataBasedOnDate,
    error,
  } = useQuery({
    queryFn: () => getOrderByDate(date as string),
    queryKey: ["order", numDays],
  });
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  return { dataBasedOnDate, isLoadingDate };
}

export default useRecentOrder;
