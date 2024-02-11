import AddProductForm from "./AddProductForm";

function AddProduct() {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <h1 className="text-3xl font-semibold">Add New Product</h1>
      <main className="relative">
        <AddProductForm />
      </main>
    </div>
  );
}

export default AddProduct;
