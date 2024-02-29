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
import useClickOutside from "../utils/useClickOutside";

type MenuContextProps = {
  openId: null | number;
  close: () => void;
  open: (id: number) => void;
  rectPosition: { x: number; y: number } | null;
  setRectPosition: Dispatch<SetStateAction<{ x: number; y: number } | null>>;
};

interface MenuProps {
  children: ReactNode;
}

interface ToggleProps {
  id: number | string;
}

interface ListProps {
  id: number;
  children: ReactNode;
}
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

function Menu({ children }: MenuProps) {
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

function Toggle({ id }: ToggleProps) {
  const { openId, close, open, setRectPosition } = useContext(MenuContext)!;

  useEffect(() => {
    function handleScroll() {
      if (openId) {
        close();
        document.removeEventListener("wheel", handleScroll);
      }
    }
    function handleResize() {
      if (openId) {
        close();
      }
    }
    if (openId) document.addEventListener("wheel", handleScroll);
    if (openId) window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("wheel", handleScroll),
        window.removeEventListener("resize", handleScroll);
    };
  }, [close, openId]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const targetButton = e.target as HTMLElement; //this will select the button
    const closestButton = targetButton.closest("button"); //this will select the button close to our target

    if (closestButton) {
      const rect = closestButton.getBoundingClientRect(); //Return the size of the closestButton element  and its position relative to the viewport:
      //The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.

      const newRectPosition = {
        // this will calculate the position of the newRec based on the viewPort
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height,
      };

      const distanceToBottom = window.innerHeight - rect.bottom; //this will calculate the distance from the bottom of the viewport for any element that to close to the bottom of the the page
      const distanceToRight = window.innerWidth - rect.right; //this will calculate the distance from the right  of the viewport for any element that to close to the right of the the page to prevent the drop down menu to not show up
      const buffer = 200; // Adjust this value as needed
      //console.log(distanceToBottom, distanceToRight, newRectPosition.x);
      // Move the position up if it's too close to the bottom
      if (distanceToBottom < buffer) {
        newRectPosition.y = Math.max(
          0,
          newRectPosition.y - (buffer - distanceToBottom),
        );
      }

      // Move the position to the left if it's too close to the right
      if (distanceToRight < buffer) {
        newRectPosition.x = Math.max(
          0,
          newRectPosition.x - (buffer - distanceToRight),
        );
      }

      setRectPosition(newRectPosition);

      openId !== id ? open(id as number) : close();
    }
  }

  return (
    <Button style={"threeDots"} onClick={handleClick}>
      <BsThreeDotsVertical />
    </Button>
  );
}

function List({ id, children }: ListProps) {
  const { openId, rectPosition, close } = useContext(MenuContext)!;
  const ref = useClickOutside(close) as React.RefObject<HTMLUListElement>; // Type assertion

  if (openId !== id || !rectPosition) return null; //this mean is their is no menu open return null
  const dropdownStyle: React.CSSProperties = {
    position: "fixed",
    zIndex: 50,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    top: `${rectPosition.y}px`,
    right: `${rectPosition.x}px`,
  };
  return createPortal(
    <ul style={dropdownStyle} ref={ref}>
      {children}
    </ul>,

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

Menu.Menu = Menu;
Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Buttons;

export default Menu;
