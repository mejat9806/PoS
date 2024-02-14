import supabase from "../services/supabase";

type OrderDataType = {
  id: number;
  cart: [];
  tableNo: number;
};

export async function getOrderData(): Promise<OrderDataType[]> {
  const { data, error } = await supabase.from("orders").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
