import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../UI/Button";
import { ProductsTypes } from "../MenuData/GetMenuData";
import useUpdateProduct from "../MenuData/ProductData/useUpdateProduct";

export type itemsProps = { item: ProductsTypes; onCloseModal?: () => void };

function UpdateDataForm({ item, onCloseModal }: itemsProps) {
  const { updateProduct } = useUpdateProduct();

  const { register, handleSubmit, watch, formState, reset } = useForm({
    defaultValues: item,
  });

  const onSubmitData: SubmitHandler<ProductsTypes> = function (
    data: ProductsTypes,
  ) {
    if (!data) return;
    updateProduct(
      {
        newData: { ...data, price: Number(data.price) },
        id: data.id,
      },
      {
        onSuccess: () => {
          reset(), onCloseModal?.();
        },
      },
    );
  };

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className=" w-full">
      <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle  mb-2">
        Update Data <span className="text-yellow-400 ">⤵</span>{" "}
      </h1>
      <label
        htmlFor="name"
        className="flex justify-between items-center gap-8 mb-3"
      >
        <h1>Product Name</h1>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring p-2 placeholder-shown:capitalize ${
            errors?.price?.message !== undefined || !watch("name")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300 "
          }`}
          type="text"
          id="name"
          {...register("name", { required: "This Required" })}
        />
      </label>
      <label
        htmlFor="price"
        className="flex justify-between items-center gap-8 mb-3"
      >
        <h1>Product Price</h1>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring p-2 placeholder-shown:capitalize ${
            errors?.price?.message !== undefined || !watch("name")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300 "
          }`}
          type="number"
          id="price"
          inputMode="numeric"
          {...register("price", {
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter numbers only",
            },
          })}
        />
      </label>
      <label htmlFor="sold_out" className="flex justify-between">
        <h1>Status</h1>
        <div className="flex flex-1 justify-center gap-2">
          <input type="checkbox" id="sold_out" {...register("sold_out")} />
          <h1>Sold Out?</h1>
        </div>
      </label>
      <div className="flex justify-end ">
        <Button style={"normal"} type="submit">
          submit
        </Button>
      </div>
    </form>
  );
}

export default UpdateDataForm;
