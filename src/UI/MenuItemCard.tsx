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
import ConfirmDelete from "./ConfirmDelete";
import { useLocation } from "react-router-dom";
export type PropType = {
  item: ProductDataProps;
};

const categoriesWithNOImages = ["bbq_fish", "bbq_beef", "bbq_chicken", "drink"];
function MenuItemCard({ item }: PropType) {
  const { id, name, price, piece, category, imagesrc = "", sold_out } = item;

  const hasNoImage = categoriesWithNOImages.includes(category);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
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
      category: category,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div
      className={`flex  h-full w-full  justify-between ${
        !hasNoImage ? "flex-col" : ""
      }  rounded-md border-2 border-transparent bg-slate-200/20 px-2 py-2 hover:border-2 hover:border-black/20 md:px-5 ${
        sold_out ? "bg-slate-300 hover:bg-red-100" : " hover:bg-yellow-100"
      } ${category === "drink" ? "flex-col " : ""}   `}
    >
      <div className={`flex flex-col `}>
        <h1
          className={`${location.pathname === "/pizza" ? "h-[70px]" : "h-fit"} font-roboto font-bold capitalize md:text-2xl ${
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
              className={`h-[220px] w-[220px] rounded-xl bg-contain transition-all duration-150 xl:h-[300px] xl:w-[300px] ${
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
              <div className="inline gap-3 font-semibold">
                <span> for {piece} pieces</span>
              </div>
            ) : (
              ""
            )}
            <span> {category === "bbq_beef" ? "per 100g" : ""}</span>
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
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
                <ModalWindow.OpenFunction opens="delete">
                  <Menu.Button icon={<BsThreeDotsVertical />}>
                    delete
                  </Menu.Button>
                </ModalWindow.OpenFunction>
              </Menu.List>

              <ModalWindow.WindowFunction name="update">
                <UpdateDataForm item={item} />
              </ModalWindow.WindowFunction>
              <ModalWindow.WindowFunction name="delete">
                <ConfirmDelete item={item} />
              </ModalWindow.WindowFunction>
            </Menu.Menu>
          </ModalWindow>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
