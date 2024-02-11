import { ReactNode } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import UpdateQuantity from "./UpdateQuantity";
import { getCurrentQuantityById } from "../Cart/CartSlice";
type ButtonTypeProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
  id: number;
  sold_out: boolean;
};

function AddToCartButton({ onClick, children, id, sold_out }: ButtonTypeProps) {
  const currentQty = useSelector(getCurrentQuantityById(id));
  const isIncart = currentQty >= 1;
  return (
    <div>
      {isIncart && (
        <div>
          <UpdateQuantity id={id} currentQty={currentQty}></UpdateQuantity>
        </div>
      )}
      {!isIncart && (
        <Button
          style={`${!sold_out ? "addCart" : "soldOut"}`}
          onClick={onClick}
          sold_out={sold_out}
        >
          {children}
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
