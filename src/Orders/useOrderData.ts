import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrderData } from "./getOrder";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function useOrderData() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const sortByRaw = searchParams.get("sortBy") || "id-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    data: { data: orderData, countValue } = { data: [], count: 0 },
    isLoading: loadingOrderdata,
    error,
  } = useQuery({
    queryFn: () => getOrderData({ page, sortBy }),
    queryKey: ["orders", page, sortBy],
  });
  if (error) throw new Error(error.message);

  const pageCount = countValue ? Math.ceil(countValue / PAGE_SIZE) : 0;
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page + 1, sortBy],
      queryFn: () =>
        getOrderData({
          page: page + 1,
          sortBy,
        }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page, sortBy],
      queryFn: () =>
        getOrderData({
          page: page,
          sortBy,
        }),
    });
  return { orderData, loadingOrderdata, countValue, pageCount };
}
