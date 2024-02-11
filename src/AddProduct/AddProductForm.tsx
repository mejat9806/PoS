import { FieldValue, FieldValues, useForm } from "react-hook-form";
import Button from "../UI/Button";
import FormLabel from "../UI/FormLabel";

function AddProductForm() {
  const { register, formState, handleSubmit, watch } = useForm();
  const categorys = [
    "drink",
    "bbq_beef",
    "bbq_chicken",
    "bbq_fish",
    "burger_beef",
    "burger_chicken",
    "pizza",
    "special_beef",
    "special_sandwich",
    "sides",
  ];

  const { errors } = formState;

  function onSubmit(data: FieldValues) {
    const { category } = data;
    const categoryToSend = category.replace(" ", "_");
    console.log(category);
    const newData = { ...data, category: categoryToSend };
    console.log(newData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Product Name" error={errors?.name?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.name?.message || !watch("name")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="text"
          id="name"
          {...register("name", {
            required: "This is required",
          })}
        />
      </FormLabel>
      <FormLabel label="Product price" error={errors?.price?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.name?.message || !watch("price")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="text"
          inputMode="numeric"
          id="price"
          {...register("price", {
            required: "This is required",
            pattern: {
              value: /^[0-9]+$/,
              message: " numbers only",
            },
          })}
        />
      </FormLabel>
      <FormLabel label="Product Category" error={errors?.category?.message}>
        <select
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.name?.message || !watch("price")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 capitalize`}
          id="category"
          {...register("category", {
            required: "This is required",
          })}
        >
          <option selected={true} disabled={true}>
            select category
          </option>
          {categorys.map((category) => (
            <option key={category}>{category.replace("_", " ")}</option>
          ))}
        </select>
      </FormLabel>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddProductForm;
