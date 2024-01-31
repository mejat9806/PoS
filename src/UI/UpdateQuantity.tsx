import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseQty, increaseQty } from "../Cart/CartSlice";
type updateQuantityProps = {
  id: number;
  currentQty: number;
  disabled: boolean;
};

function UpdateQuantity({ currentQty, id, disabled }: updateQuantityProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center gap-5 ">
      <Button
        style="circle"
        disabled={disabled}
        onchange={() => dispatch(decreaseQty(id))}
      >
        -
      </Button>
      {currentQty}
      <Button style="circle" onchange={() => dispatch(increaseQty(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
