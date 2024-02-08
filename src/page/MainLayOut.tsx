import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getChart } from "../Cart/CartSlice";
import { IoCartSharp } from "react-icons/io5";

function MainLayOut() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const carts = useSelector(getChart);
  console.log(carts);
  // const cartAllQTY = carts.reduce((acc,qty)=>)
  useEffect(() => {
    if (!carts.length) {
      setOpenCart(false);
    }
  }, [carts]);
  return (
    <div className="  grid grid-cols-mainpart">
      <Outlet />

      <div
        className={`${
          openCart
            ? "w-[600px] border-black/20 mb-4 backdrop-blur-2xl bg-yellow-300/50"
            : "w-16 "
        } bg-yellow-300 h-screen fixed  right-0  transition-all duration-100 top-0 overflow-y-auto `}
      >
        {!openCart && (
          <button
            onClick={() => setOpenCart(true)}
            className="text-3xl flex items-center justify-center mx-auto mt-4"
          >
            <div className="relative">
              <IoCartSharp />{" "}
              {carts.length ? (
                <p className="bg-red-400 h-6 w-6 rounded-full text-center flex justify-center items-center text-white text-sm font-roboto font-bold absolute top-4 -right-4 drop-shadow-2xl">
                  !
                </p>
              ) : (
                ""
              )}
            </div>
          </button>
        )}

        {openCart && <Cart setOpenCart={setOpenCart} openCart={openCart} />}
        <div
          className="flex justify-center items-center fixed h-full "
          onClick={() => setOpenCart(!openCart)}
        >
          {!openCart && (
            <h1 className="rotate-90 font-roboto font-extrabold cursor-pointer h-14">
              CART
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainLayOut;
