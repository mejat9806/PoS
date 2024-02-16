import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../MenuData/GetMenuData";
import supabase from "../services/supabase";
import { getToday } from "../utils/helper";

export function useData() {
  const {
    isLoading,
    data: productData,
    error,
  } = useQuery({ queryKey: ["productData"], queryFn: () => getAllData() });
  return { isLoading, productData, error };
}
