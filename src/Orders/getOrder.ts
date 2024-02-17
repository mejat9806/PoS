import supabase from "../services/supabase";
import { getToday } from "../utils/helper";

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
export async function getTodayOrder() {
  const today = getToday(); // Get today's date
  console.log(today); // Get
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .gte("created_at", `${today}T00:00:00.000Z`) // Greater than or equal to the start of today
    .lt("created_at", `${today}T23:59:59.999Z`) // Less than the end of today
    .order("created_at");

  if (error instanceof Error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getOrderByDate(queryDate: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .gte("created_at", queryDate)
    .lte("created_at", getToday());
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  return data;
}
