import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder, newOrderTypes } from "./CreateOrder";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const {
    mutate: creatingOrder,
    error,
    isPending: isCreatingOrder,
  } = useMutation({
    mutationFn: (neworder: newOrderTypes) => createOrder(neworder),
    onSuccess: () => {
      toast.success("Create Order Success");
      dispatch(clearCart());
      queryClient.invalidateQueries({ queryKey: ["order"] });
    },
  });
  return { creatingOrder, isCreatingOrder, error };
}
