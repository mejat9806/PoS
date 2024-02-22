/* import { useQueryClient, useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { ProductsTypes, UpdateStatus } from "../MenuData/GetMenuData";

interface UpdateProductDataParams {
  newData: ProductsTypes;
  id: number;
}

function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: updateStatus, isPending: isUpdateStatus } = useMutation({
    mutationFn: ({ newData, id }: UpdateProductDataParams) =>
      UpdateStatus(newData, id),
    onSuccess: () => {
      toast.success("Product updated");
      queryClient.invalidateQueries({ queryKey: ["productData"] });
    },
    onError: (error) => {
     console.log()
      toast.error("Product not updated");
      throw new Error(error.message);
    },
  });
  return { updateStatus, isUpdateStatus };
}

export default useUpdateProduct;
 */
