import {
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useClickOutside from "../utils/useClickOutside";

type ModalContextProps = {
  open: (name: string) => void;
  close: () => void;
  openName: string;
};

const modalContext = createContext<ModalContextProps>({
  open: () => {},
  close: () => {},
  openName: "",
});
type ModalWindowFunction = {
  children: React.ReactNode;
};
function ModalWindow({ children }: ModalWindowFunction) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <modalContext.Provider value={{ open, close, openName }}>
      {children}
    </modalContext.Provider>
  );
}

type openFunctionProps = {
  children: React.ReactNode;
  opens: string;
};
function OpenFunction({ children, opens: opensWithName }: openFunctionProps) {
  const { open } = useContext(modalContext);

  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opensWithName),
  });
}
type windowFunctionProps = {
  children: React.ReactNode;
  name: string;
};
function WindowFunction({ children, name }: windowFunctionProps) {
  const { close, openName } = useContext(modalContext);
  const ref = useClickOutside(close) as React.RefObject<HTMLDivElement>; // Cast ref to RefObject<HTMLDivElement>
  if (name !== openName) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-300/50 transition-all duration-200">
      <div
        className="fixed left-1/2 top-1/2 w-fit translate-x-[-50%] translate-y-[-50%] transform rounded-md bg-white p-8 shadow-2xl transition-all duration-200"
        ref={ref}
      >
        <button onClick={close} className="absolute right-0 top-0 p-2">
          <HiXMark />
        </button>
        <div>
          {cloneElement(children as ReactElement, {
            onCloseModal: close,
            hello: 1234,
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
}
ModalWindow.OpenFunction = OpenFunction; // Corrected the component name
ModalWindow.WindowFunction = WindowFunction; // Corrected the component name
export default ModalWindow;
