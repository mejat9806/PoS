import AddProductForm from "./AddProductForm";

function AddProduct() {
  return (
    <div className="flex flex-col justify-center mx-auto w-full">
      <h1 className="text-3xl font-semibold">Add New Product</h1>
      <main className="relative w-[500px]">
        <AddProductForm />
      </main>
    </div>
  );
}

export default AddProduct;
