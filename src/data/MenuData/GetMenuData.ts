import supabase from "../../services/supabase";
export async function getAllData() {
  const { data: Product, error } = await supabase.from("Product").select("*");
  if (error) {
    console.log(error);
    throw new Error("Fetching data fail");
  }
  return Product;
}
