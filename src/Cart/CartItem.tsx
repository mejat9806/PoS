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
    <div className=" mx-4 mt-3 rounded-2xl bg-white px-2 py-5 shadow-2xl shadow-black/20">
      <div className="mx-5 grid grid-cols-cart">
        <div className="flex items-center justify-center">
          <h1 className="mr-2 w-40 text-start font-roboto text-2xl capitalize">
            {orderData.name}
          </h1>
        </div>
        <div className=" mr-2 flex items-center justify-center">
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
