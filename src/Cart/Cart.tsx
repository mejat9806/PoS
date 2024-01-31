/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaArrowRightToBracket } from "react-icons/fa6";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getChart } from "./CartSlice";
import { Key } from "react";

type PropTypes = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type orderDataType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice?: number;
};
/*
const orderData: orderDataType[] = [
  { name: "item1", qty: 2, price: 5 },
  { name: "item2", qty: 2, price: 16 },
  { name: "item3", qty: 1, price: 16 },
  { name: "item4", qty: 4, price: 16 },
  { name: "item5", qty: 2, price: 16 },
  { name: "item6", qty: 6, price: 16 },
  { name: "item7", qty: 5, price: 16 },
];

orderData.forEach((item) => {
  item.totalPrice = item.qty * item.price;
}); */

function Cart({ setOpenCart, openCart }: PropTypes) {
  const carts = useSelector(getChart);
  console.log(carts);
  return (
    <div className="h-screen flex flex-col align-bottom">
      <div className="bg-black">
        <div className="flex items-center space-x-3  p-2 bg-black">
          <button
            onClick={() => setOpenCart(false)}
            className="text-3xl flex  justify-start ml-2  border-2 border-black p-2 rounded-sm text-yellow-400 hover:border-2 hover:border-yellow-400 hover:bg-white hover:text-black hover:rounded-md"
          >
            <FaArrowRightToBracket />
          </button>
          <h1 className="text-3xl font-roboto text-white">Order Summary</h1>
        </div>
      </div>
      <div className="divide-y-2 divide-slate-400/30 flex-1 overflow-y-auto">
        {carts.map((cart: orderDataType) => (
          <div key={cart.name}>
            <CartItem orderData={cart} />
          </div>
        ))}
      </div>
      <div className="flex justify-start mb-10">total chart X</div>
    </div>
  );
}

export default Cart;
