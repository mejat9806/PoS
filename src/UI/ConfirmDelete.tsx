import { ProductsTypes } from "../MenuData/GetMenuData";
import { useDeleteProduct } from "../MenuData/ProductData/useDeleteProduct";
import Button from "./Button";

type DeleteProps = {
  item: ProductsTypes;
  onCloseModal?: () => void;
};
function ConfirmDelete({ item, onCloseModal }: DeleteProps) {
  const { DeleleteProduct, isPendingDelete } = useDeleteProduct();
  function handleDeleteProduct() {
    DeleleteProduct(item.id);
    onCloseModal?.();
  }
  return (
    <div className="mx-auto   flex w-[500px] flex-col items-center justify-between gap-10 rounded-md bg-white">
      <h1 className="font-roboto text-3xl font-bold capitalize">
        confirm
        <span className="font-extrabold uppercase text-red-600"> delete</span> ?
      </h1>
      <div>
        <h1 className="text-2xl font-medium">{item.name}</h1>
      </div>
      <div className=" flex gap-5">
        <Button disabled={isPendingDelete} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button
          style="deleteItemButton"
          onClick={handleDeleteProduct}
          disabled={isPendingDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
