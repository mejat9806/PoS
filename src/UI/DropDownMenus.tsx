import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import Button from "./Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { createPortal } from "react-dom";

type MenuContextProps = {
  openId: null | number;
  close: () => void;
  open: (id: number) => void;
  rectPosition: { x: number; y: number } | null;
  setRectPosition: Dispatch<SetStateAction<{ x: number; y: number } | null>>;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface DropDownMenusProps {
  children: ReactNode;
}

function DropDownMenus({ children }: DropDownMenusProps) {
  const [openId, setOpenId] = useState<number | null>(null);
  const close = () => setOpenId(null);
  const [rectPosition, setRectPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const open = setOpenId;

  return (
    <MenuContext.Provider
      value={{ openId, close, open, rectPosition, setRectPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

interface MenuProps {
  children: ReactNode;
}

function Menu({ children }: MenuProps) {
  return <div className="relative">{children}</div>;
}

interface ToggleProps {
  id: number;
}

function Toggle({ id }: ToggleProps) {
  const { openId, close, open, setRectPosition } = useContext(MenuContext)!;

  useEffect(() => {
    function handleScroll() {
      if (openId) {
        close();
        document.removeEventListener("wheel", handleScroll);
      }
    }
    if (openId) document.addEventListener("wheel", handleScroll);
    return () => document.removeEventListener("wheel", handleScroll);
  }, [close, openId]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const targetButton = e.target as HTMLElement;

    const closestButton = targetButton.closest("button");

    if (closestButton) {
      const rect = closestButton.getBoundingClientRect();
      const newRectPosition = {
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      };

      setRectPosition(newRectPosition);

      openId !== id ? open(id) : close();
    }
  }

  return (
    <Button style={"threeDots"} onClick={handleClick}>
      <BsThreeDotsVertical />
    </Button>
  );
}

interface ListProps {
  id: number;
  children: ReactNode;
}

function List({ id, children }: ListProps) {
  const { openId, rectPosition } = useContext(MenuContext)!;

  if (openId !== id || !rectPosition) return null; //this mean is their is no menu open return null
  const dropdownStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 50,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    top: `${rectPosition.y - 50}px`,
    right: `${rectPosition.x - 150}px`,
  };
  return createPortal(
    <div style={dropdownStyle}>
      <ul>{children}</ul>
    </div>,
    document.body,
  );
}
interface ButtonsProps {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

function Buttons({ children, onClick, disabled }: ButtonsProps) {
  const { close } = useContext(MenuContext)!;

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <Button style="dropMenuBtn" onClick={handleClick} disabled={disabled}>
        <span>{children}</span>
      </Button>
    </li>
  );
}

DropDownMenus.Menu = Menu;
DropDownMenus.Toggle = Toggle;
DropDownMenus.List = List;
DropDownMenus.Button = Buttons;

export default DropDownMenus;
