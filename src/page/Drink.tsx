import toast from "react-hot-toast";
import Error from "../UI/Error";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import { ProductDataProps } from "./BBQ";
import DropDownMenus from "../UI/Menus";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

function Drink() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const drinkData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "drink",
  );
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <DropDownMenus>
      <div>
        <h1 className="mb-6 flex font-roboto text-3xl font-extrabold uppercase  md:text-9xl">
          Drink{" "}
          <span className="rotate-[270deg] text-yellow-400">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>
        <div className="flex justify-center">
          <div className="grid h-full w-fit  grid-cols-1 grid-cols-2 gap-3 transition-all duration-150 lg:grid-cols-3 xl:grid-cols-3">
            {drinkData.map((drink) => (
              <div
                key={drink.id}
                className="gap-3 rounded-md odd:bg-gray-200/30  "
              >
                <MenuItemCard item={drink} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropDownMenus>
  );
}

export default Drink;
