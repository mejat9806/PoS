import AddProductForm from "./AddProductForm";

function AddProduct() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center">
      <h1 className="text-3xl font-semibold">Add New Product</h1>
      <main className="relative w-[500px]">
        <AddProductForm
          onCloseModal={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </main>
    </div>
  );
}

export default AddProduct;
