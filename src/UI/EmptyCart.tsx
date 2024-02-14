import { FaRegFaceSadTear } from "react-icons/fa6";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center h-full text-4xl gap-8 font-roboto font-extrabold">
      <h1>The Cart is Empty </h1>
      <span className="flex items-center ">
        <FaRegFaceSadTear />
      </span>
    </div>
  );
}

export default EmptyCart;
