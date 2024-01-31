import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { LuArrowLeftToLine } from "react-icons/lu";

function MainLayOut() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <div className="  grid grid-cols-mainpart">
      <Outlet />

      <div
        className={`${
          openCart ? "w-[500px] border-black/20 mb-4 " : "w-16 "
        } bg-yellow-300 h-screen fixed  right-0  transition-all duration-100 top-0 overflow-y-auto `}
      >
        {!openCart && (
          <button
            onClick={() => setOpenCart(true)}
            className="text-3xl flex items-center justify-center mx-auto mt-4"
          >
            <LuArrowLeftToLine />
          </button>
        )}

        {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        <div className="flex justify-center   relative ">
          {!openCart && (
            <h1
              className="rotate-90  font-roboto font-extrabold absolute top-[300px] cursor-pointer"
              onClick={() => setOpenCart(!openCart)}
            >
              CART
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainLayOut;
