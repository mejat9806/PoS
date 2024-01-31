import { useSelector } from "react-redux";
import UpdateQuantity from "../UI/UpdateQuantity";
import { orderDataType } from "./Cart";
import { getCurrentQuantityById } from "./CartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../utils/helper";

type typeCartProps = {
  orderData: orderDataType;
};
function CartItem({ orderData }: typeCartProps) {
  console.log(orderData);
  const currentQty = useSelector(getCurrentQuantityById(orderData.id));
  const quantitylowerthan1 = currentQty <= 1;
  return (
    <div className="grid grid-cols-cart py-5 px-2 bg-slate-50/45">
      <h1 className="text-2xl font-roboto capitalize w-40">{orderData.name}</h1>
      <div className=" flex justify-center items-center mr-4">
        <UpdateQuantity
          id={orderData.id}
          currentQty={currentQty}
          disabled={quantitylowerthan1}
        />
      </div>

      <div className=" flex justify-center items-center w-20">
        <h1>{formatCurrency(orderData.totalPrice)}</h1>
      </div>
      <button className=" flex justify-center items-center">
        <FaRegTrashAlt />
      </button>
    </div>
    /* <div className="flex justify-between items-center my-5 mx-10">
      <h1 className="text-2xl font-roboto">{orderData.name}</h1>
      <div>
        <UpdateQuantity
          id={orderData.id}
          currentQty={currentQty}
          disabled={quantitylowerthan1}
        />
      </div>

      <div>
        <h1>{orderData.totalPrice}</h1>
      </div>
      <button>
        <FaRegTrashAlt />
      </button>
    </div> */
  );
}

export default CartItem;
