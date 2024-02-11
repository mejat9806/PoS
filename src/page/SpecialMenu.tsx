import toast from "react-hot-toast";
import Spinner from "../UI/Spinner";
import { useData } from "../data/useData";
import Error from "../UI/Error";
import MenuItemCard from "../UI/MenuItemCard";
import DropDownMenus from "../UI/Menus";
import { ProductDataProps } from "./BBQ";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

function SpecialMenu() {
  const { error, isLoading, productData } = useData();
  console.log(productData);
  if (isLoading) {
    return <Spinner />;
  }
  const specialSandData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "special_sandwich",
  );
  const specialData: ProductDataProps[] = (productData || []).filter(
    (product) => product.category === "special_beef",
  );
  console.log(specialData);
  if (error) {
    toast.error("Something when wrong");
    return <Error>Fetching Pizza data fail </Error>;
  }
  return (
    <DropDownMenus>
      <div className="transition-all duration-150">
        <h1 className="md:text-9xl text-5xl font-roboto font-extrabold uppercase mb-6  flex">
          Special{" "}
          <span className="text-yellow-400 rotate-[270deg]">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-x-6 grid-cols-1">
          <div>
            <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30  mx-auto flex">
              Sandwich{" "}
              <span className="text-yellow-400 rotate-[270deg]">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>{" "}
            <div className="flex justify-center ">
              <div className="md:grid lg:grid-cols-2 md:grid-cols-1 gap-9  flex flex-col mt-5 w-fit">
                {specialSandData.map((specialsand) => (
                  <MenuItemCard item={specialsand} key={specialsand.id} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-semibold lg:text-6xl text-5xl font-menuTitle border-b-2 border-black/30  mx-auto flex">
              Beef Plater{" "}
              <span className="text-yellow-400 rotate-[270deg]">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>{" "}
            <div className="flex justify-center ">
              <div className="md:grid md:grid-cols-1 lg:grid-cols-2 w-full gap-9  flex flex-col mt-5">
                {specialData.map((special) => (
                  <MenuItemCard item={special} key={special.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DropDownMenus>
  );
}

export default SpecialMenu;
