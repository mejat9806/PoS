import { PostgrestError } from "@supabase/supabase-js";
import supabase, { supabaseUrl } from "../services/supabase";
export type ProductsTypes = {
  id: number;
  name: string;
  description: string;
  price: number;
  imagesrc: string;
  category: string;
  piece: number;
  create_at: string;
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
type imagesrcType = { name: string };
export type newDataType = {
  name: string;
  price: number;
  piece: string;
  description: string;
  imagesrc: imagesrcType;
  category: string;
};

export async function deleteProduct(id: number) {
  const { error, data } = await supabase.from("Product").delete().eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
const NoImageAndDescription: string[] = [
  "drink",
  "select category",
  "bbq beef",
  "bbq chicken",
  "bbq fish",
  "select_category",
];
export async function addNewProduct(newData: newDataType) {
  const hasImage = newData.imagesrc && newData.imagesrc.name;
  const imageName = hasImage
    ? `${Math.floor(Math.random() * 10000)}-${
        newData.imagesrc.name
      }`.replaceAll("/", "")
    : "";
  const imagePath = hasImage
    ? `${supabaseUrl}/storage/v1/object/public/productimg/${imageName}`
    : "";
  console.log(imageName);
  console.log(imagePath);
  const { data, error } = await supabase
    .from("Product")
    .insert([{ ...newData, imagesrc: hasImage ? imagePath : null }])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  if (
    typeof newData.category === "string" &&
    !NoImageAndDescription.includes(newData.category)
  ) {
    const { error: storageError } = await supabase.storage
      .from("productimg")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .upload(imageName, newData.imagesrc as any);
    if (storageError) {
      console.error(storageError);
      throw new Error("Error: Image couldn't be uploaded.");
    }
  }
  return data;
}
