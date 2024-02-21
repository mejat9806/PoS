import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import { ProductDataProps } from "./BBQ";
import Error from "../UI/Error";
import MenuItemCard from "../UI/MenuItemCard";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import Menu from "../UI/Menus";

function Burger() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const sortedProductData = (productData || [])
    .slice()
    .sort((a, b) => a.id - b.id);
  const BurgerBeefitem: ProductDataProps[] = sortedProductData.filter(
    (product) => product.category === "burger_beef",
  );
  const BurgerChickenitem: ProductDataProps[] = sortedProductData.filter(
    (product) => product.category === "burger_chicken",
  );
  console.log(BurgerBeefitem);
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Burger data fail </Error>;
  }
  return (
    <Menu>
      <div className=" sm:flex  sm:flex-col md:mx-0 ">
        <h1 className="mb-6 flex font-roboto text-3xl font-extrabold uppercase  md:text-9xl">
          Burger{" "}
          <span className="rotate-[270deg] text-yellow-400">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>
        <div className=" grid justify-center gap-10 ">
          <div className="mb-10">
            <h1 className="flex border-b-2 border-black/30 font-menuTitle text-5xl font-semibold lg:text-6xl">
              BEEF{" "}
              <span className="rotate-[270deg] text-yellow-400">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>
            <div className="mt-5 grid w-fit grid-cols-1 items-center gap-5 md:grid-cols-2 md:px-6">
              {BurgerBeefitem.map((item) => (
                <div key={item.id} className="w-80 odd:bg-gray-200/30">
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h1 className="flex border-b-2 border-black/30 font-menuTitle text-5xl font-semibold lg:text-6xl">
              BEEF{" "}
              <span className="rotate-[270deg] text-yellow-400">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>
            <div className="mt-5 grid w-fit grid-cols-1 items-center gap-5 md:grid-cols-2 md:px-6">
              {BurgerChickenitem.map((item) => (
                <div key={item.id} className="w-80 odd:bg-gray-200/30">
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Menu>
  );
}

export default Burger;
