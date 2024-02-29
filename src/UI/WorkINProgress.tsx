import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

type workINProgressPropsType = {
  toggleDialog: () => void;
  setShowPopUp: Dispatch<SetStateAction<boolean>>;
};

function WorkINProgress({
  toggleDialog,
  setShowPopUp,
}: workINProgressPropsType) {
  const handleCloseButtonClick = () => {
    setShowPopUp(false);
    toggleDialog();
  };
  return (
    <div className=" relative h-full w-full p-10 ">
      <div className="absolute right-0 top-0 flex justify-end px-3 py-1 hover:rounded-full hover:text-yellow-500">
        <button onClick={handleCloseButtonClick}>X</button>
      </div>
      <div className="flex h-[100px] items-center">
        <h1 className="font-roboto text-3xl capitalize">
          this is work in progress
        </h1>
      </div>
      <div className="mt-10 flex justify-center">
        <Button style="" onClick={handleCloseButtonClick}>
          OK,Close
        </Button>
      </div>
    </div>
  );
}

export default WorkINProgress;
