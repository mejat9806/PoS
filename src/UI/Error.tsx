import { ReactNode } from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Error({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-6xl font-roboto font-extrabold">{children} 😢 </h1>{" "}
        <Button style="error" onClick={() => navigate(-1)}>
          <RiArrowGoBackLine />
        </Button>
      </div>
    </div>
  );
}

export default Error;
