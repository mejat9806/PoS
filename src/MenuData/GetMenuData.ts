import { PostgrestError } from "@supabase/supabase-js";
import supabase from "../services/supabase";
export type ProductsTypes = {
  id: number;
  create_at: string;
  name: string;
  description: string;
  price: number;
  imagesrc: string;
  category: string;
  piece: number;
  sold_out: boolean;
};
export async function getAllData(): Promise<ProductsTypes[]> {
  const { data: Product, error } = (await supabase
    .from("Product")
    .select("*")) as { data: ProductsTypes[]; error: PostgrestError | null };
  if (error) {
    console.log(error);
    throw new Error("Fetching data fail");
  }
  return Product;
}
/* export async function getAllData() {
  const { data: Product, error } = await supabase.from("Product").select("*");
  if (error) {
    console.log(error);
    throw new Error("Fetching data fail");
  }
  return Product;
}
 */

export async function updateProductData(newData: ProductsTypes, id: number) {
  console.log("data to update", newData, "id:", id);
  const { data, error } = await supabase
    .from("Product")
    .update(newData)
    .eq("id", id)
    .select();
  if (error) {
    console.log(error);
  }
  console.log(data);
  return data;
}
/* export async function UpdateStatus({ Status, id }: UpdateProductDataParams) {
  console.log("data to update", Status, "id:", id);
  const { data, error } = await supabase
    .from("Product")
    .update(Status)
    .eq("id", id)
    .select();
  if (error) {
    console.log(error);
  }
  console.log(data);
  return data;
}
 */
