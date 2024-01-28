import { FaArrowLeft } from "react-icons/fa";
import { ProptypesNav } from "./Nav";
import { TiThMenu } from "react-icons/ti";

function Logo({ setOpen, open }: ProptypesNav) {
  return (
    <div className="flex justify-center ">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-center"
      >
        {!open ? (
          <TiThMenu className=" fill-black w-11 h-24 " />
        ) : (
          <FaArrowLeft className=" fill-black w-11 h-24 " />
        )}
      </button>
    </div>
  );
}

export default Logo;
