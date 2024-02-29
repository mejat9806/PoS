import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrderData } from "./getOrder";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function useOrderData() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const {
    data: { data: orderData, countValue } = { data: [], count: 0 },
    isLoading: loadingOrderdata,
    error,
  } = useQuery({
    queryFn: () => getOrderData({ page }),
    queryKey: ["orders", page],
  });
  if (error) throw new Error(error.message);

  const pageCount = countValue ? Math.ceil(countValue / PAGE_SIZE) : 0;
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page + 1],
      queryFn: () => getOrderData({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["todayActivity", page],
      queryFn: () => getOrderData({ page: page }),
    });
  return { orderData, loadingOrderdata, countValue, pageCount };
}
