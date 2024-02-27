import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import Error from "../UI/Error";
import MenuItemCard from "../UI/MenuItemCard";
import DropDownMenus from "../UI/Menus";
import { ProductDataProps } from "./BBQ";
import TitleForPage from "../UI/TitleForPage";

function SpecialMenu() {
  const { error, isLoading, productData } = useData();
  console.log();
  if (isLoading) {
    return <Spinner />;
  }
  const specialSandData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "special_sandwich",
  );
  const specialData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "special_beef",
  );
  console.log();
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <DropDownMenus>
      <div className="transition-all duration-150 ">
        <TitleForPage title="Special" />
        <div className=" grid justify-center gap-10 ">
          <div>
            <TitleForPage title="Sandwich" subTitle={true} />
            <div className="flex justify-center ">
              <div className="mt-5 flex w-fit flex-col  gap-9 md:grid md:grid-cols-1 lg:grid-cols-2">
                {specialSandData.map((specialsand) => (
                  <MenuItemCard item={specialsand} key={specialsand.id} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <TitleForPage title="Beef Plater" subTitle={true} />

            <div className="mb-24 flex justify-center">
              <div className="mt-5 flex w-full flex-col gap-9  md:grid md:grid-cols-1 lg:grid-cols-2">
                {specialData.map((special) => (
                  <MenuItemCard item={special} key={special.id} />
                ))}
              </div>
            </div>
          </div>
          t
        </div>
      </div>
    </DropDownMenus>
  );
}

export default SpecialMenu;
