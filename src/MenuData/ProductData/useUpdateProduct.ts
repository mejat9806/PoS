import { useQueryClient, useMutation } from "@tanstack/react-query";
import { ProductsTypes, updateProductData } from "../GetMenuData";
import toast from "react-hot-toast";

export interface UpdateProductDataParams {
  newData: ProductsTypes;
  id: number;
}

function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isPending: isUpdateProduct } = useMutation({
    mutationFn: ({ newData, id }: UpdateProductDataParams) =>
      updateProductData(newData, id),
    onSuccess: () => {
      toast.success("Product updated");
      queryClient.invalidateQueries({ queryKey: ["productData"] });
    },
    onError: (error) => {
      console.log();
      toast.error("Product not updated");
      throw new Error(error.message);
    },
  });
  return { updateProduct, isUpdateProduct };
}

export default useUpdateProduct;
