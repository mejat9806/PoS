import { ProductsTypes } from "../MenuData/GetMenuData";
import { useDeleteProduct } from "../MenuData/ProductData/useDeleteProduct";
import Button from "./Button";

type DeleteProps = {
  item: ProductsTypes;
  onCloseModal?: () => void;
};
function ConfirmDelete({ item, onCloseModal }: DeleteProps) {
  console.log(item.id);
  const { DeleleteProduct, isPendingDelete } = useDeleteProduct();
  function handleDeleteProduct() {
    DeleleteProduct(item.id);
    onCloseModal?.();
  }
  return (
    <div className="bg-white   rounded-md w-[500px] flex flex-col mx-auto items-center justify-between gap-10">
      <h1 className="capitalize text-3xl font-roboto font-bold">
        confirm
        <span className="font-extrabold text-red-600 uppercase"> delete</span> ?
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
