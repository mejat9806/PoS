import { useState } from "react";
import { ProductDataProps } from "../page/BBQ";
import { formatCurrency } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addItem } from "../Cart/CartSlice";
import AddToCartButton from "./AddToCartButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import DropDownMenus from "./DropDownMenus";
import ModalWindow from "./ModalWindow";
import UpdateDataForm from "../UpdateProducts/UpdateDataForm";

export type PropType = {
  item: ProductDataProps;
};

function MenuItemCard({ item }: PropType) {
  const { id, name, price, piece, category, imagesrc, sold_out } = item;

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
  if (category === "drink") {
    return (
      <ModalWindow>
        <DropDownMenus>
          <div className=" border-transparent border-2 hover:border-2  hover:bg-yellow-100 p-3 hover:drop-shadow-2xl transition-all duration-100 rounded-xl   hover:border-black/20  bg-slate-200/20 text-center space-y-10 flex justify-center flex-col">
            <div className="flex flex-col  ">
              <h1 className="md:text-2xl font-bold font-roboto capitalize h-[60px] ">
                {name}
              </h1>
              <h2 className="font-semibold">{formatCurrency(price)}</h2>
            </div>
            <div className="flex justify-center ml-6">
              <AddToCartButton
                onClick={handleAddtoCart}
                id={id}
                sold_out={sold_out}
              >
                add to cart
              </AddToCartButton>
              <div className="relative ml-5">
                <DropDownMenus.Toggle id={id} />
                <DropDownMenus.List id={id}>
                  <ModalWindow.OpenFunction opens="update">
                    <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                      update
                    </DropDownMenus.Button>
                  </ModalWindow.OpenFunction>
                  <ModalWindow.OpenFunction opens="option2">
                    <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                      Update Status
                    </DropDownMenus.Button>
                  </ModalWindow.OpenFunction>
                  <ModalWindow.OpenFunction opens="option3">
                    <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                      option3
                    </DropDownMenus.Button>
                  </ModalWindow.OpenFunction>
                </DropDownMenus.List>
              </div>
            </div>
          </div>
        </DropDownMenus>
        <ModalWindow.WindowFunction name="update">
          <UpdateDataForm item={item} />
        </ModalWindow.WindowFunction>
      </ModalWindow>
    );
  }
  if (
    category === "pizza" ||
    category === "sides" ||
    category === "special_sandwich" ||
    category === "special_beef"
  ) {
    return (
      <ModalWindow>
        <DropDownMenus>
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
              <div className="flex gap-3">
                <AddToCartButton
                  onClick={handleAddtoCart}
                  id={id}
                  sold_out={sold_out}
                >
                  add to cart
                </AddToCartButton>
                <div className="relative ">
                  <DropDownMenus.Toggle id={id} />
                  <DropDownMenus.List id={id}>
                    <ModalWindow.OpenFunction opens="update">
                      <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                        update
                      </DropDownMenus.Button>
                    </ModalWindow.OpenFunction>
                    <ModalWindow.OpenFunction opens="option1">
                      <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                        Update Status
                      </DropDownMenus.Button>
                    </ModalWindow.OpenFunction>
                    <ModalWindow.OpenFunction opens="option2">
                      <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                        option
                      </DropDownMenus.Button>
                    </ModalWindow.OpenFunction>
                  </DropDownMenus.List>
                </div>{" "}
              </div>
            </div>
          </div>
          <ModalWindow.WindowFunction name="update">
            <UpdateDataForm item={item} />
          </ModalWindow.WindowFunction>
        </DropDownMenus>
      </ModalWindow>
    );
  }
  return (
    <ModalWindow>
      <DropDownMenus.Menu>
        <div
          className={`h-fit  flex justify-between  border-transparent border-2 hover:border-2 px-2 md:px-5 py-2 rounded-md hover:border-black/20 bg-slate-200/20 ${
            sold_out ? "bg-slate-300 hover:bg-red-100" : " hover:bg-yellow-100"
          }`}
        >
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
          <div className="flex justify-center items-center gap-5">
            <AddToCartButton
              onClick={handleAddtoCart}
              id={id}
              sold_out={sold_out}
            >
              {!sold_out ? "add to cart" : "SOLD OUT"}
            </AddToCartButton>
            <div className="relative before:">
              <DropDownMenus.Toggle id={id} />

              <DropDownMenus.List id={id}>
                <ModalWindow.OpenFunction opens="update">
                  <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                    update
                  </DropDownMenus.Button>
                </ModalWindow.OpenFunction>
                <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                  Update Status
                </DropDownMenus.Button>
                <DropDownMenus.Button icon={<BsThreeDotsVertical />}>
                  Option 3
                </DropDownMenus.Button>
              </DropDownMenus.List>
            </div>
          </div>
        </div>
        <ModalWindow.WindowFunction name="update">
          <UpdateDataForm item={item} />
        </ModalWindow.WindowFunction>
      </DropDownMenus.Menu>
    </ModalWindow>
  );
}

export default MenuItemCard;
