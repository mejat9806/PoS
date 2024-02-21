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
      <div className="transition-all duration-150 ">
        <h1 className="mb-6 flex font-roboto text-5xl font-extrabold uppercase md:text-6xl lg:text-9xl">
          Special{" "}
          <span className="rotate-[270deg] text-yellow-400">
            <MdOutlineSubdirectoryArrowLeft />
          </span>
        </h1>

        <div className=" grid justify-center gap-10 ">
          <div>
            <h1 className="mx-auto flex border-b-2 border-black/30 font-menuTitle text-5xl  font-semibold lg:text-6xl">
              Sandwich{" "}
              <span className="rotate-[270deg] text-yellow-400">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>{" "}
            <div className="flex justify-center ">
              <div className="mt-5 flex w-fit flex-col  gap-9 md:grid md:grid-cols-1 lg:grid-cols-2">
                {specialSandData.map((specialsand) => (
                  <MenuItemCard item={specialsand} key={specialsand.id} />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="mx-auto flex border-b-2 border-black/30 font-menuTitle text-5xl  font-semibold lg:text-6xl">
              Beef Plater{" "}
              <span className="rotate-[270deg] text-yellow-400">
                <MdOutlineSubdirectoryArrowLeft />
              </span>
            </h1>{" "}
            <div className="mb-24 flex justify-center">
              <div className="mt-5 flex w-full flex-col gap-9  md:grid md:grid-cols-1 lg:grid-cols-2">
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
