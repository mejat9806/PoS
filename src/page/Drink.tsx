import toast from "react-hot-toast";
import Error from "../UI/Error";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import { ProductData } from "./BBQ";
import MenuItemCard from "../UI/MenuItemCard";

function Drink() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const drinkData: ProductData[] = (productData || []).filter(
    (product) => product.category === "drink",
  );
  console.log(drinkData);
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <div>
      <h1 className="md:text-9xl text-3xl font-roboto font-extrabold uppercase mb-6  ">
        Drink
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-3 w-[80%] ">
          {drinkData.map((drink) => (
            <MenuItemCard item={drink} key={drink.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drink;
