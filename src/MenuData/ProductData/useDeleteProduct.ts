import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../GetMenuData";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const {
    mutate: DeleleteProduct,
    isPending: isPendingDelete,
    error: errorDelete,
  } = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: () => {
      toast.success(`product deleted successfully`);
      queryClient.invalidateQueries({ queryKey: ["productData"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { DeleleteProduct, isPendingDelete, errorDelete };
}
