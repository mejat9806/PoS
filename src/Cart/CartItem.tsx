import { useDispatch, useSelector } from "react-redux";
import { orderDataType } from "./Cart";
import { deleteItem, getCurrentQuantityById } from "./CartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../utils/helper";
import UpdateQuantity from "../UI/UpdateQuantity";
import Button from "../UI/Button";

export type typeCartProps = {
  orderData: orderDataType;
};
function CartItem({ orderData }: typeCartProps) {
  const dispatch = useDispatch();
  const currentQty = useSelector(getCurrentQuantityById(orderData.id));

  return (
    <div className=" mx-4 mt-3 rounded-2xl bg-white shadow-2xl shadow-black/20 sm:px-2 sm:py-5">
      <div className="grid grid-cols-cart sm:mx-5">
        <div className="flex items-center sm:justify-center">
          <h1 className=" font-roboto  capitalize sm:mr-2 sm:w-40 sm:text-center sm:text-2xl">
            {orderData.name}
          </h1>
        </div>
        <div className=" flex items-center justify-center sm:mr-2">
          <UpdateQuantity id={orderData.id} currentQty={currentQty} />
        </div>

        <div className=" flex w-20 items-center justify-center ">
          <h1>{formatCurrency(orderData.totalPrice)}</h1>
        </div>
        <div className=" flex w-20 items-center justify-center ">
          <Button
            style="delete"
            onClick={() => dispatch(deleteItem(orderData.id))}
          >
            <FaRegTrashAlt />
          </Button>
        </div>
      </div>
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
