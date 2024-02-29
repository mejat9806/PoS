import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";

import Error from "../UI/Error";
import { useData } from "../data/useData";
import MenuItemCard from "../UI/MenuItemCard";
import DropDownMenus from "../UI/Menus";
import { ProductDataProps } from "./BBQ";
import TitleForPage from "../UI/TitleForPage";

function Side() {
  const { error, isLoading, productData } = useData();
  if (isLoading) {
    return <Spinner />;
  }
  const sideData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "sides",
  );

  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <DropDownMenus>
      <TitleForPage title="Sides" />
      <div className="mb-28 flex justify-center">
        <div className="flex w-fit  flex-col gap-9  sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-4">
          {sideData.map((side) => (
            <div className="odd:bg-gray-200/30 ">
              <MenuItemCard item={side} key={side.id} />
            </div>
          ))}
        </div>
      </div>
    </DropDownMenus>
    /*  <DropDownMenus>
      <h1 className="md:text-9xl text-5xl font-roboto font-extrabold uppercase mb-6  ">
        Sides
      </h1>
      <div className="flex justify-center ">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 w-fit gap-9  flex flex-col">
          {sideData.map((side) => (
            <MenuItemCard item={side} key={side.id} />
          ))}
        </div>
      </div>
    </DropDownMenus> */
  );
}

export default Side;
