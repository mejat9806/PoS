import toast from "react-hot-toast";
import MenuItemCard from "../UI/MenuItemCard";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import Error from "../UI/Error";
import { ProductDataProps } from "./BBQ";
import DropDownMenus from "../UI/Menus";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

function Pizza() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const pizzaData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "pizza",
  );
  console.log(pizzaData);
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <DropDownMenus>
      <div className="mb-24">
        <h1 className="md:text-9xl text-5xl font-roboto font-extrabold uppercase mb-6  flex">
          Pizza{" "}
          <span className="text-yellow-400 rotate-[270deg]">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>
        <div className="flex justify-center ">
          <div className="md:grid md:grid-cols-2 w-fit gap-9  flex flex-col">
            {pizzaData.map((pizza) => (
              <div className="" key={pizza.id}>
                <MenuItemCard item={pizza} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropDownMenus>
  );
}

export default Pizza;
