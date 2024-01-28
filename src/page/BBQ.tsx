import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import { ReactNode } from "react";
export type ProductData = {
  id: number;
  create_at: string;
  name: string;
  description: string | null;
  price: number;
  piece: number | null;
  category: string;
  imagesrc?: string;
};
function BBQ() {
  const { isLoading, productData, error } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  // console.log(productData);
  const BBQBeefitem: ProductData[] = (productData || []).filter(
    (product) => product.category === "bbq_beef",
  );
  const BBQChickenitem: ProductData[] = (productData || []).filter(
    (product) => product.category === "bbq_chicken",
  );
  const FishChickenitem: ProductData[] = (productData || []).filter(
    (product) => product.category === "bbq_fish",
  );
  if (error) {
    toast.error("Fetching data error ");
  }
  return (
    <div className=" md:mx-0  sm:flex sm:flex-col">
      <h1 className="md:text-9xl text-3xl font-roboto font-extrabold uppercase mb-6  ">
        Barbeque
      </h1>
      <div className="   lg:grid lg:grid-cols-2 gap-x-6">
        <div className="mb-10">
          <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30 ">
            BEEF <span className="text-yellow-400">⤵</span>{" "}
          </h1>
          <div className="grid grid-rows-2 w-full  md:px-6">
            {BBQBeefitem.map((item) => (
              <MenuItemCard item={item} key={item.id}></MenuItemCard>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30">
            CHICKEN <span className="text-yellow-400 ">⤵</span>{" "}
          </h1>
          <div className="grid grid-rows-2 w-full  md:px-6">
            {BBQChickenitem.map((item) => (
              <MenuItemCard item={item} key={item.id}></MenuItemCard>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="font-semibold lg:text-6xl text-5xl  font-menuTitle border-b-2 border-black/30">
            FISH <span className="text-yellow-400">⤵</span>{" "}
          </h1>
          <div className="grid grid-rows-2 w-full  md:px-6 ">
            {FishChickenitem.map((item) => (
              <MenuItemCard item={item} key={item.id}></MenuItemCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BBQ;
