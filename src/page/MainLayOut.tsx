import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { getChart } from "../Cart/CartSlice";
import Cart from "../Cart/Cart";

function MainLayOut() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const carts = useSelector(getChart);
  const dialogRef = useRef<HTMLDialogElement>(null);
  function toggleDialog() {
    if (!dialogRef.current) return;
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  // const cartAllQTY = carts.reduce((acc,qty)=>)
  useEffect(() => {
    if (!carts.length) {
      setOpenCart(false);
    }
  }, [carts]);

  return (
    /*     <div className="  grid grid-cols-mainpart">
    
     */

    <div className="relative mx-5 h-svh sm:mx-20">
      <Outlet />
      <div className=" mx-auto bg-slate-500">
        <button
          className="absolute right-5 top-0 rounded-full bg-yellow-400 p-3 sm:hidden"
          onClick={toggleDialog}
        >
          <IoCartSharp size={24} />
          {carts.length ? (
            <p className="absolute -right-2 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-center font-roboto text-sm font-bold text-white drop-shadow-2xl">
              !
            </p>
          ) : (
            ""
          )}
        </button>
        <dialog
          ref={dialogRef}
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              toggleDialog();
            }
          }}
          className="backdrop:bg-gray-400/30 backdrop:backdrop-blur-sm"
        >
          <Cart
            setOpenCart={setOpenCart}
            openCart={openCart}
            toggleDialog={toggleDialog}
          />
        </dialog>
      </div>
      <div
        className={`${
          openCart
            ? "mb-4 w-[600px] border-black/20 bg-yellow-300/50 backdrop-blur-2xl"
            : "w-16 "
        } fixed right-0 top-0 hidden   h-screen overflow-y-auto bg-yellow-300 transition-all duration-100 sm:block`}
      >
        {!openCart && (
          <button
            onClick={() => setOpenCart(true)}
            className="mx-auto mt-4 flex items-center justify-center text-3xl"
          >
            <div className="relative">
              <IoCartSharp />
              {carts.length ? (
                <p className="absolute -right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-center font-roboto text-sm font-bold text-white drop-shadow-2xl">
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
          className="fixed flex h-full items-center justify-center "
          onClick={() => setOpenCart(!openCart)}
        >
          {!openCart && (
            <h1 className="h-14 rotate-90 cursor-pointer font-roboto font-extrabold">
              CART
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainLayOut;
