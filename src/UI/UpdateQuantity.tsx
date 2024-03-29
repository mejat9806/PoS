import { useDispatch } from "react-redux";
import Button from "./Button";
import Spinner from "./Spinner";
import { useSettings } from "../setting/useSettings";
import { decreaseQty, increaseQty } from "../Cart/CartSlice";
type updateQuantityProps = {
  id: number;
  currentQty: number;
};

function UpdateQuantity({ currentQty, id }: updateQuantityProps) {
  const dispatch = useDispatch();
  const { settingData, isLoadingSetting } = useSettings();
  if (isLoadingSetting) {
    return <Spinner />;
  }
  const { order_qty } = settingData;
  return (
    <div className="flex items-center justify-center gap-3  sm:gap-5">
      <Button style="circle" onchange={() => dispatch(decreaseQty(id))}>
        -
      </Button>
      {currentQty}
      <Button
        style="circle"
        onchange={() => dispatch(increaseQty(id))}
        disabled={currentQty >= order_qty}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantity;
