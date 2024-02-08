import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import DropDownMenus from "../UI/DropDownMenus";
import useUpdateProduct from "../MenuData/ProductData/useUpdateProduct";
export type ProductDataProps = {
  id: number;
  create_at: string;
  name: string;
  description: string;
  price: number;
  piece: number;
  category: string;
  imagesrc: string;
  sold_out: boolean;
};
function BBQ() {
  const { isUpdateProduct } = useUpdateProduct();

  const { isLoading, productData, error } = useData();
  if (isLoading || isUpdateProduct) {
    return <Spinner />;
  }
  const sortedProductData = (productData || [])
    .slice()
    .sort((a, b) => a.id - b.id);
  console.log(sortedProductData);
  const BBQBeefitem: ProductDataProps[] = sortedProductData.filter(
    (product) => product.category === "bbq_beef",
  );
  const BBQChickenitem: ProductDataProps[] = sortedProductData.filter(
    (product) => product.category === "bbq_chicken",
  );
  const FishChickenitem: ProductDataProps[] = sortedProductData.filter(
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
        <DropDownMenus>
          <div className="mb-10">
            <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30 ">
              BEEF <span className="text-yellow-400 ">⤵</span>{" "}
            </h1>
            <div className="grid grid-rows-2 w-full  md:px-6 gap-5 mt-5">
              {BBQBeefitem.map((item) => (
                <div className="odd:bg-slate-300/50  " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30">
              CHICKEN <span className="text-yellow-400 ">⤵</span>{" "}
            </h1>
            <div className="grid grid-rows-2 w-full  md:px-6 gap-5 mt-5">
              {BBQChickenitem.map((item) => (
                <div className="odd:bg-slate-300/50  " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h1 className="font-semibold lg:text-6xl text-5xl  font-menuTitle border-b-2 border-black/30">
              FISH <span className="text-yellow-400">⤵</span>{" "}
            </h1>
            <div className="grid grid-rows-2 w-full  md:px-6 gap-5 mt-5">
              {FishChickenitem.map((item) => (
                <div className="odd:bg-slate-300/50  " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
        </DropDownMenus>
      </div>
    </div>
  );
}

export default BBQ;
