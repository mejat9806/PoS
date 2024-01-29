import { useState } from "react";
import { ProductData } from "../page/BBQ";
import { formatCurrency } from "../utils/helper";
import Button from "./Button";

type PropType = {
  item: ProductData;
};

function MenuItemCard({ item }: PropType) {
  const { name, price, piece, category, imagesrc } = item;
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  function handleImageLoad() {
    setImageLoaded(true);
  }
  if (category === "drink") {
    return (
      <div className="mb-10 border-transparent border-2 hover:border-2  hover:bg-yellow-100 p-3 hover:drop-shadow-2xl transition-all duration-100 rounded-xl  hover:border-black/20  bg-slate-200/20 text-center space-y-10 ">
        <div className="flex flex-col  ">
          <h1 className="md:text-2xl font-bold font-roboto capitalize h-[60px] mb-10 ">
            {name}{" "}
          </h1>
          <h2 className="font-semibold">
            {formatCurrency(price)}{" "}
            {piece ? (
              <div className="inline font-semibold">
                <span>for </span> <span>{piece} pieces</span>
              </div>
            ) : (
              ""
            )}
          </h2>
        </div>
        <div className="flex justify-center place-items-end ">
          <Button style="addCart">add to cart</Button>
        </div>
      </div>
    );
  }
  if (
    category === "pizza" ||
    category === "sides" ||
    category === "special_sandwich" ||
    category === "special_beef"
  ) {
    return (
      <div className="mb-10 border-transparent border-2 hover:border-2  hover:bg-yellow-100 p-3 hover:drop-shadow-2xl transition-all duration-100 rounded-xl  hover:border-black/20 bg-slate-200/20">
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="md:text-3xl text-2xl font-bold font-roboto text-center capitalize h-[50px] md:mb-3">
            {name}
          </h1>
          <div className="flex items-center justify-center">
            <img
              src={imagesrc}
              loading="lazy"
              onLoad={handleImageLoad}
              className={`xl:w-[300px] xl:h-[300px] h-[220px] w-[220px] bg-contain rounded-xl transition-all duration-150 ${
                !imageLoaded ? "bg-gray-400/30 blur-lg" : ""
              }`}
            />
          </div>
          <Button style="addCart">add to cart</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="h-fit  flex justify-between mt-7 border-transparent border-2 hover:border-2 hover:bg-yellow-100 px-2 md:px-5 py-2 rounded-md hover:border-black/20 bg-slate-200/20">
      <div className="flex flex-col ">
        <h1 className="md:text-2xl font-bold font-roboto">{name} </h1>
        <h2 className="font-semibold">
          {formatCurrency(price)}{" "}
          {piece ? (
            <div className="inline font-semibold">
              <span>for </span> <span>{piece} pieces</span>
            </div>
          ) : (
            ""
          )}
          <span>{category === "bbq_beef" ? "per 100g" : ""}</span>
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Button style="addCart">add to cart</Button>
      </div>
    </div>
  );
}

export default MenuItemCard;
