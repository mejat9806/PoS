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
  if (category === "pizza") {
    return (
      <div className="mb-10 border-transparent border-2 hover:border-2  hover:bg-yellow-100 p-3 hover:drop-shadow-2xl transition-all duration-100 rounded-xl  hover:border-black/20 ">
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="md:text-4xl font-bold font-roboto ">{name}</h1>
          <div className="">
            <img
              src={imagesrc}
              loading="lazy"
              onLoad={handleImageLoad}
              className={`md:w-[300px] md:h-[300px] h-[220px] w-[220px] bg-contain rounded-xl  ${
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
    <div className="h-fit  flex justify-between mt-7 border-transparent border-2 hover:border-2 hover:bg-yellow-100 px-2 md:px-5 py-2 rounded-md hover:border-black/20 ">
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
