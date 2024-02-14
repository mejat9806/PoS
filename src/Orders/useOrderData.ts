import { useQuery } from "@tanstack/react-query";
import { getOrderData } from "./getOrder";

export function useOrderData() {
  const {
    data: orderData,
    isLoading: loadingOrderdata,
    error,
  } = useQuery({ queryFn: getOrderData, queryKey: ["orders"] });
  if (error) throw new Error(error.message);
  return { orderData, loadingOrderdata };
}
