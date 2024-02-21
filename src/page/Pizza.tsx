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
        <h1 className="mb-6 flex font-roboto text-5xl font-extrabold uppercase  md:text-9xl">
          Pizza{" "}
          <span className="rotate-[270deg] text-yellow-400">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>
        <div className="flex justify-center ">
          <div className="flex w-fit flex-col gap-10  md:grid md:grid-cols-4">
            {pizzaData.map((pizza) => (
              <div className="odd:bg-gray-200/30 " key={pizza.id}>
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
