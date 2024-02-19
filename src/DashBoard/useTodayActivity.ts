import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodayOrder } from "../Orders/getOrder";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

function useTodayActivity() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: { data: todayActivity, countValue } = { data: [], count: 0 },
    isLoading: isTodayActivity,
    error,
  } = useQuery({
    queryKey: ["todayActivity", page],
    queryFn: () => getTodayOrder({ page }),
  });
  if (error) {
    throw new Error(error.message);
  }
  const pageCount = countValue ? Math.ceil(countValue / PAGE_SIZE) : 0;
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page + 1],
      queryFn: () => getTodayOrder({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page],
      queryFn: () => getTodayOrder({ page: page }),
    });
  return { todayActivity, countValue, isTodayActivity, pageCount };
}

export default useTodayActivity;
