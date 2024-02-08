import toast from "react-hot-toast";
import Error from "../UI/Error";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import { ProductDataProps } from "./BBQ";

function Drink() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const drinkData: ProductDataProps[] = (productData || []).filter(
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
        <div className="grid xl:grid-cols-4 gap-3 sm:w-full w-[50%] sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 transition-all duration-150">
          {drinkData.map((drink) => (
            <div key={drink.id} className="odd:bg-gray-200/30 gap-3 rounded-md">
              <MenuItemCard item={drink} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Drink;
