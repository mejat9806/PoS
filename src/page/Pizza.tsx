import toast from "react-hot-toast";
import MenuItemCard from "../UI/MenuItemCard";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import { ProductData } from "./BBQ";
import Error from "../UI/Error";

function Pizza() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const pizzaData: ProductData[] = (productData || []).filter(
    (product) => product.category === "pizza",
  );
  console.log(pizzaData);
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <div className="">
      <h1 className="md:text-9xl text-5xl font-roboto font-extrabold uppercase mb-6  ">
        Pizza
      </h1>
      <div className="flex justify-center ">
        <div className="md:grid md:grid-cols-2 w-fit gap-9  flex flex-col">
          {pizzaData.map((pizza) => (
            <MenuItemCard item={pizza} key={pizza.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
