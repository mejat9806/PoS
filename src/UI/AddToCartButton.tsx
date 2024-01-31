import { ReactNode } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../Cart/CartSlice";
import UpdateQuantity from "./UpdateQuantity";
type ButtonTypeProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
  id: number;
};

function AddToCartButton({ onClick, children, id }: ButtonTypeProps) {
  const currentQty = useSelector(getCurrentQuantityById(id));
  const isIncart = currentQty >= 1;
  const quantitylowerthan1 = currentQty <= 1;
  return (
    <div>
      {isIncart && (
        <div>
          <UpdateQuantity
            id={id}
            currentQty={currentQty}
            disabled={quantitylowerthan1}
          ></UpdateQuantity>
        </div>
      )}
      {!isIncart && (
        <Button style="addCart" onClick={onClick}>
          {children}
        </Button>
      )}
    </div>
  );
}

export default AddToCartButton;
