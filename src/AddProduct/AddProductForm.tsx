import { FieldValues, useForm } from "react-hook-form";
import Button from "../UI/Button";
import FormLabel from "../UI/FormLabel";
import { useState } from "react";

function AddProductForm() {
  const [categoryToWatched, setCategoryToWatched] = useState("select_category");
  console.log(categoryToWatched);
  const {
    register,
    formState,
    handleSubmit,
    watch,
    setError,
    reset,
    clearErrors,
  } = useForm();
  const categories: string[] = [
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
  const NoImageAndDescription: string[] = [
    "drink",
    "select category",
    "bbq beef",
    "bbq chicken",
    "bbq fish",
    "select_category",
  ];
  const ImageAndDescription: string[] = [
    "burger beef",
    "burger chicken",
    "pizza",
    "special beef",
    "special sandwich",
    "sides",
    "select_category",
  ];
  const catogoryWithPiece: string[] = [
    "bbq chicken",
    "select_category",
    "bbq fish",
  ];
  const selectedCategory = watch("category");
  //const categoryToWatched = selectedCategory;
  // console.log(categoryToWatched);
  // console.log(catogoryWithPiece.includes(categoryToWatched));
  //const testgetvalue = getValues("name");//this just a test getvalue
  //console.log(testgetvalue);
  const { errors } = formState;
  /* const ValidationForcategoryWithNoImageAndDescription = {
    required: !NoImageAndDescription.includes(categoryToWatched)
      ? false
      : "This is required",
  }; */
  const ValidationForcategoryWithImageAndDescription = {
    required: !ImageAndDescription.includes(categoryToWatched)
      ? false
      : "This is required",
  };
  const validationForCategory = {
    required:
      selectedCategory === "select_category" ? "This is required" : false,
  };
  function resetFormOnCategoryChange() {
    reset({
      name: "",
      price: "",
      piece: "",
      description: "",
      imagesrc: "",
    });
    clearErrors(); // Clear all errors
  }
  function onSubmit(data: FieldValues) {
    const { category } = data;

    const categoryToSend = category?.replace(" ", "_");
    console.log(categoryToSend);
    if (category === "select category") {
      clearErrors("category"); // Clear any existing errors
      return setError("category", {
        type: "manual",
        message: "Please select a category.", // Set a custom error message
      });
    }
    const newData = { ...data, category: categoryToSend };
    console.log(newData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel label="Product Category" error={errors?.category?.message}>
        <select
          defaultValue="select category"
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.category?.message || categoryToWatched === "select category"
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 uppercase`}
          id="category"
          {...register("category", validationForCategory)}
          onChange={(e) => {
            const selectedCategory = e.target.value;
            setCategoryToWatched(selectedCategory);
            resetFormOnCategoryChange();
          }}
        >
          <option disabled={true} selected={true}>
            select category
          </option>
          {categories.map((category) => (
            <option key={category}>{category.replace("_", " ")}</option>
          ))}
        </select>
      </FormLabel>
      <FormLabel label="Product Name" error={errors?.name?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.name?.message || !watch("name")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="text"
          id="name"
          disabled={categoryToWatched === "select_category"}
          {...register("name", { required: "This is required" })}
        />
      </FormLabel>
      <FormLabel label="Product price" error={errors?.price?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.price?.message || !watch("price")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="text"
          inputMode="numeric"
          id="price"
          {...register(
            "price",

            {
              required: "This is required",
              pattern: {
                value: /^[0-9]+$/,
                message: " numbers only",
              },
            },
          )}
          disabled={categoryToWatched === "select_category"}
        />
      </FormLabel>
      <FormLabel label="Piece Per Order" error={errors?.piece?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.piece?.message || !watch("piece")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="text"
          inputMode="numeric"
          id="piece"
          {...register("piece", ValidationForcategoryWithImageAndDescription)}
          disabled={
            !catogoryWithPiece.includes(categoryToWatched) ||
            categoryToWatched === "select_category"
          }
        />
      </FormLabel>
      <FormLabel
        label="Product description "
        error={errors?.description?.message}
      >
        <textarea
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed w-full bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.description?.message || !watch("description")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          id="description"
          {...register(
            "description",
            ValidationForcategoryWithImageAndDescription,
          )}
          disabled={NoImageAndDescription.includes(categoryToWatched)}
        />
      </FormLabel>
      <FormLabel label="Product Image" error={errors?.imagesrc?.message}>
        <input
          className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring ${
            errors?.imagesrc?.message || !watch("imagesrc")
              ? "focus:ring-red-600"
              : "focus:ring-yellow-300"
          } p-2 placeholder-shown:capitalize`}
          type="file"
          id="imagesrc"
          disabled={NoImageAndDescription.includes(categoryToWatched)}
          {...register(
            "imagesrc",
            ValidationForcategoryWithImageAndDescription,
          )}
        />
      </FormLabel>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default AddProductForm;
