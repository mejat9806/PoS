import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import WorkINProgress from "./WorkINProgress";

function PopUpMessage({
  setShowPopUp,
  showPopUp,
}: {
  setShowPopUp: Dispatch<SetStateAction<boolean>>;
  showPopUp: boolean;
}) {
  const popUpRef = useRef<HTMLDialogElement | null>(null);
  function toggleDialog() {
    if (!popUpRef.current) return;
    popUpRef.current.hasAttribute("open")
      ? popUpRef.current.close()
      : popUpRef.current.showModal();
  }
  console.log(showPopUp);
  useEffect(() => {
    if (popUpRef.current) {
      popUpRef.current.showModal();
    }
  }, []);

  return (
    <div className="w-full">
      <dialog
        ref={popUpRef}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog();
          }
        }}
      >
        <div className="">
          <WorkINProgress
            toggleDialog={toggleDialog}
            setShowPopUp={setShowPopUp}
          />
        </div>
      </dialog>
    </div>
  );
}

export default PopUpMessage;
