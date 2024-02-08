import supabase from "../services/supabase";
import { cartType } from "./CartSlice";

export type newOrderTypes = {
  cart: cartType[];
};
export async function createOrder(neworder: newOrderTypes) {
  console.log(neworder);
  const { data, error } = await supabase
    .from("orders")
    .insert([neworder])
    .select();
  if (error) {
    console.log(error);
    throw new Error("create booking fail");
  }
  return data;
}
