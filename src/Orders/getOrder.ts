import supabase from "../services/supabase";
import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helper";

export type OrderType = {
  id: number;
  cart: [];
  TableNo: number;
  total_price: number;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  created_at: string;
};
type getOrderType = {
  page: number;
  sortBy: { field: string; direction: string };
};
export async function getOrderData({
  page,
  sortBy,
}: getOrderType): Promise<{ data: OrderType[]; countValue: number }> {
  console.log(sortBy);
  let query = supabase.from("orders").select("*", { count: "exact" });
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  const { data, error, count } = await query;
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  const countValue = count !== null ? count : 0;
  return { data: data as OrderType[], countValue };
}

export async function getTodayOrder({ page }: { page: number }) {
  const today = getToday(); // Get today's date
  today;
  const startDate = `${today}T00:00:00.000Z`; // Start at 8:00 AM MYT
  const endDate = `${today}T22:00:00.000Z`; // End at 10:00 PM MYT
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

  const startDate = `${today}T00:00:00.000Z`; // Start at 8:00 AM MYT
  const endDate = `${today}T22:00:00.000Z`; // End at 10:00 PM MYT
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
  const today = getToday();
  today;
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
