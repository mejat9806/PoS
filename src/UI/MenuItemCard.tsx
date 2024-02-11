import { useState } from "react";
import { ProductDataProps } from "../page/BBQ";
import { formatCurrency } from "../utils/helper";
import { useDispatch } from "react-redux";
import AddToCartButton from "./AddToCartButton";
import ModalWindow from "./ModalWindow";
import { addItem } from "../Cart/CartSlice";
import UpdateDataForm from "../UpdateProducts/UpdateDataForm";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from "../UI/Menus";
export type PropType = {
  item: ProductDataProps;
};

const categoriesWithNOImages = ["bbq_fish", "bbq_beef", "bbq_chicken", "drink"];
function MenuItemCard({ item }: PropType) {
  const { id, name, price, piece, category, imagesrc = "", sold_out } = item;
  console.log(category);
  const hasNoImage = categoriesWithNOImages.includes(category);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  function handleImageLoad() {
    setImageLoaded(true);
  }
  function handleAddtoCart(e: { preventDefault: () => void }) {
    e.preventDefault();
    const newItem = {
      id: id,
      name: name,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div
      className={`h-fit  flex justify-between ${
        !hasNoImage ? "flex-col" : ""
      } border-transparent border-2 hover:border-2 px-2 md:px-5 py-2 rounded-md hover:border-black/20 bg-slate-200/20 ${
        sold_out ? "bg-slate-300 hover:bg-red-100" : " hover:bg-yellow-100"
      } ${category === "drink" ? "flex-col " : ""} `}
    >
      <div className={`flex flex-col `}>
        <h1
          className={`md:text-2xl font-bold font-roboto capitalize ${
            !hasNoImage || category === "drink" ? "text-center" : "text-start"
          }`}
        >
          {name}
        </h1>
        {!hasNoImage ? (
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
        ) : (
          ""
        )}
        <div
          className={`flex text-lg ${
            !hasNoImage ? "justify-center" : "justify-start"
          } ${category === "drink" ? "justify-center p-5" : "justify-start"}`}
        >
          <h2 className={`font-semibold  `}>
            {formatCurrency(price)}
            {piece ? (
              <div className="inline font-semibold gap-3">
                <span> for {piece} pieces</span>
              </div>
            ) : (
              ""
            )}
            <span>{category === "bbq_beef" ? "per 100g" : ""}</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <AddToCartButton onClick={handleAddtoCart} id={id} sold_out={sold_out}>
          {!sold_out ? "add to cart" : "SOLD OUT"}
        </AddToCartButton>
        <div className="relative">
          <ModalWindow>
            <Menu.Menu>
              <Menu.Toggle id={id} />
              <Menu.List id={id}>
                <ModalWindow.OpenFunction opens="update">
                  <Menu.Button icon={<BsThreeDotsVertical />}>
                    update
                  </Menu.Button>
                </ModalWindow.OpenFunction>
                <ModalWindow.OpenFunction opens="update">
                  <Menu.Button icon={<BsThreeDotsVertical />}>
                    update
                  </Menu.Button>
                </ModalWindow.OpenFunction>
              </Menu.List>

              <ModalWindow.WindowFunction name="update">
                <UpdateDataForm item={item} />
              </ModalWindow.WindowFunction>
              <ModalWindow.WindowFunction name="option2">
                <div>HEllo</div>
              </ModalWindow.WindowFunction>
            </Menu.Menu>
          </ModalWindow>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
