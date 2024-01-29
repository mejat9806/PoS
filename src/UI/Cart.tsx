import { FaArrowRightToBracket } from "react-icons/fa6";

type PropTypes = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setOpenCart, openCart }: PropTypes) {
  return (
    <div>
      <button onClick={() => setOpenCart(false)}>
        <FaArrowRightToBracket />
      </button>
      <h1>Cart</h1>d
    </div>
  );
}

export default Cart;
