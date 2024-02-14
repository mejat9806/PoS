/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaArrowRightToBracket } from "react-icons/fa6";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartPrice, getChart } from "./CartSlice";
import { useCreateOrder } from "./useCreateOrder";
import { useSettings } from "../setting/useSettings";
import { useUpdateSetting } from "../setting/useUpdateSetting";
import Spinner from "../UI/Spinner";
import { formatCurrency } from "../utils/helper";
import Button from "../UI/Button";
import TableNumber from "../UI/TableNumber";
import { useState } from "react";
import { getOrderData } from "../Orders/getOrder";
import { useOrderData } from "../Orders/useOrderData";
import toast from "react-hot-toast";
import EmptyCart from "../UI/EmptyCart";

type PropTypes = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type orderDataType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
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

function Cart({ setOpenCart }: PropTypes) {
  const [tableNo, setTableNo] = useState<string | number>("select table");
  const { isLoadingSetting, settingData } = useSettings();
  const { isUpdatingSetting } = useUpdateSetting();
  const { orderData, loadingOrderdata } = useOrderData();
  console.log(orderData);
  const carts = useSelector(getChart);
  const cartPrice = useSelector(getCartPrice);
  const { creatingOrder } = useCreateOrder();
  if (isLoadingSetting || isUpdatingSetting || loadingOrderdata)
    return <Spinner />;
  console.log(carts.length);
  const pricesAfterTax = settingData.tax_rate
    ? cartPrice * (settingData.tax_rate / 100)
    : 0;
  const handleSendData = () => {
    if (typeof tableNo === "string")
      return toast.error("Please select table NUMBER");
    const neworder = { cart: carts, TableNo: tableNo };
    console.log(neworder);
    creatingOrder(neworder);
  };
  return (
    <div className="h-screen flex flex-col align-bottom w-full">
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
      <div className=" flex-1 overflow-y-auto ">
        {carts.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <div>
              <TableNumber setTableNo={setTableNo} tableNo={tableNo} />
            </div>
            <div className=" flex-1 overflow-y-auto ">
              {carts.map((cart: orderDataType) => (
                <div key={cart.name}>
                  <CartItem orderData={cart} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col  text-yellow-300 text-lg uppercase font-semibold font-roboto w-full">
        <div className="my-5 space-y-4  ">
          <div className="  text-black p-6 rounded-3xl">
            <div className="flex justify-between">
              <h3>cart price </h3>
              <span>{formatCurrency(cartPrice)}</span>
            </div>
            <div className="flex justify-between">
              <h2>service tax({settingData.tax_rate}%) </h2>
              <span>{formatCurrency(pricesAfterTax)}</span>
            </div>
            <div className="text-2xl flex justify-between">
              <h2>total cart </h2>
              <span className="font-extrabold">
                {formatCurrency(pricesAfterTax + cartPrice)}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              style="addCartMain"
              onClick={handleSendData}
              disabled={carts.length === 0}
            >
              Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
