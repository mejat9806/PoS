import supabase from "../services/supabase";
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helper";

export type OrderType = {
  id: number;
  cart: [];
  TableNo: number;
  total_price: number;
  category: string;
};

export async function getOrderData(): Promise<OrderType[]> {
  const { data, error } = await supabase.from("orders").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function getTodayOrder({ page }: { page: number }) {
  const today = getToday(); // Get today's date
  console.log(today);
  const startDate = `${today}T00:00:00.000Z`; // Start at 8:00 AM MYT
  const endDate = `${today}T14:00:00.000Z`; // End at 10:00 PM MYT
  let query = supabase
    .from("orders")
    .select("*", { count: "exact" })
    .gte("created_at", startDate)
    .lte("created_at", endDate)
    .order("created_at");

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error instanceof Error) {
    throw new Error(error.message);
  }
  const countValue = count !== null ? count : 0;

  return { data, countValue };
}
export async function getTodayOrderforWidget() {
  const today = getToday(); // Get today's date
  console.log(today);
  const startDate = `${today}T00:00:00.000Z`; // Start at 8:00 AM MYT
  const endDate = `${today}T14:00:00.000Z`; // End at 10:00 PM MYT
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .gte("created_at", startDate)
    .lt("created_at", endDate)
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
