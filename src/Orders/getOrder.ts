import supabase from "../services/supabase";

export type OrderType = {
  id: number;
  cart: [];
  TableNo: number;
  total_price: number;
};

export async function getOrderData(): Promise<OrderType[]> {
  const { data, error } = await supabase.from("orders").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
