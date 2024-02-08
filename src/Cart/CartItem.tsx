import { useDispatch, useSelector } from "react-redux";
import UpdateQuantity from "../UI/UpdateQuantity";
import { orderDataType } from "./Cart";
import { deleteItem, getCurrentQuantityById } from "./CartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatCurrency } from "../utils/helper";
import Button from "../UI/Button";

type typeCartProps = {
  orderData: orderDataType;
};
function CartItem({ orderData }: typeCartProps) {
  const dispatch = useDispatch();
  const currentQty = useSelector(getCurrentQuantityById(orderData.id));

  return (
    <div className=" py-5 px-2 bg-white rounded-2xl mx-4 mt-3 shadow-2xl shadow-black/20">
      <div className="grid grid-cols-cart mx-5">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-roboto capitalize w-40 mr-2 text-start">
            {orderData.name}
          </h1>
        </div>
        <div className=" flex justify-center items-center mr-2">
          <UpdateQuantity id={orderData.id} currentQty={currentQty} />
        </div>

        <div className=" flex justify-center items-center w-20 ">
          <h1>{formatCurrency(orderData.totalPrice)}</h1>
        </div>
        <div className=" flex justify-center items-center w-20 ">
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
