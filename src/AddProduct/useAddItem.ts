import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct } from "../MenuData/GetMenuData";
import toast from "react-hot-toast";

function useAddItem() {
  const query = useQueryClient();
  const { mutate: addProduct, isPending: isAdding } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      toast.success("Product is added"),
        query.invalidateQueries({ queryKey: ["productData"] });
    },
    onError: (err: any) => {
      throw new Error(err.message);
    },
  });
  return { addProduct, isAdding };
}

export default useAddItem;
