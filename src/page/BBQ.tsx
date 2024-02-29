import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import useUpdateProduct from "../MenuData/ProductData/useUpdateProduct";
import Menu from "../UI/Menus";
import TitleForPage from "../UI/TitleForPage";

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
    <Menu>
      <div className=" sm:flex  sm:flex-col md:mx-0 ">
        <TitleForPage title="Barbeque" />
        <div className="   gap-x-6 lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <TitleForPage title="Beef" subTitle={true} />

            <div className="mt-5 grid w-full  grid-rows-2 gap-5 md:px-6">
              {BBQBeefitem.map((item) => (
                <div className="odd:bg-gray-200/30 " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <TitleForPage title="Chicken" subTitle={true} />

            <div className="mt-5 grid w-full  grid-rows-2 gap-5 md:px-6">
              {BBQChickenitem.map((item) => (
                <div className="odd:bg-gray-200/30  " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <TitleForPage title="Fish" subTitle={true} />

            <div className="mb-10 mt-5 grid  w-full grid-rows-2 gap-5 md:px-6">
              {FishChickenitem.map((item) => (
                <div className="odd:bg-gray-200/30 " key={item.id}>
                  <MenuItemCard item={item}></MenuItemCard>
                </div>
              ))}
            </div>
          </div>
          T
        </div>
      </div>
    </Menu>
  );
}

export default BBQ;
