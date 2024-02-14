import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoIosSettings } from "react-icons/io";
import Icon from "./Icon";
import { RiLogoutCircleFill } from "react-icons/ri";
import { GiFrenchFries, GiMeat } from "react-icons/gi";
import { FaAddressBook, FaPizzaSlice } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { LuSandwich } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";

export type ProptypesNav = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

export interface WithIcon {
  name: string;
  icon: React.ReactNode;
}
const toItem: string[] = [
  "/",
  "bbq",
  "pizza",
  "side",
  "special",
  "drink",
  "order",
];
const toOther: string[] = ["setting", "logout"];
const toItemIcon: WithIcon[] = [
  { name: "/", icon: <HiHomeModern /> },
  { name: "bbq", icon: <GiMeat /> },
  { name: "pizza", icon: <FaPizzaSlice /> },
  { name: "side", icon: <GiFrenchFries /> },
  { name: "special", icon: <LuSandwich /> },
  { name: "drink", icon: <MdLocalDrink /> },
  { name: "order", icon: <FaAddressBook /> },
];
const toOtherIcon: WithIcon[] = [
  { name: "logout", icon: <RiLogoutCircleFill /> },
  { name: "setting", icon: <IoIosSettings /> },
];

function Nav({ setOpen, open }: ProptypesNav) {
  function closeOnClick() {
    setOpen(false);
  }

  return (
    <div>
      <div className="h-screen flex flex-col justify-between ">
        {open ? (
          <>
            <div className="flex flex-col space-y-4 ">
              <Logo setOpen={setOpen} open={open} />

              {toItem.map((navItem, i) => (
                <div className="flex flex-col " key={i}>
                  <div className={`flex justify-center flex-col  gap-2 `}>
                    <NavLink
                      key={i}
                      to={navItem}
                      className={({ isActive }) =>
                        `${isActive ? "bg-black text-yellow-400" : ""} navLink`
                      }
                      onClick={closeOnClick}
                    >
                      {navItem === "/" ? "HOME" : navItem.toUpperCase()}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 mb-10">
              {toOther.map((other, i) => (
                <div className="flex flex-col " key={i}>
                  <div className={`flex justify-center flex-col  gap-2 `}>
                    <NavLink
                      to={other}
                      className={({ isActive }) =>
                        `${isActive ? "bg-black text-yellow-400" : ""} navLink`
                      }
                      onClick={closeOnClick}
                    >
                      {other.toUpperCase()}
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-4">
              <Logo setOpen={setOpen} open={open} />
              {toItemIcon.map((navItem, i) => (
                <div className="flex flex-col " key={i}>
                  <div
                    className={`flex justify-center flex-col  gap-2 items-center `}
                  >
                    <NavLink
                      to={navItem.name}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-white text-black rounded-l-full w-full text-center pl-3 "
                            : ""
                        } navLinkIcon p-1`
                      }
                      onClick={closeOnClick}
                    >
                      <Icon icon={navItem.icon} />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-4 items-center mb-10">
              {toOtherIcon.map((tootherIcon, i) => (
                <div className="flex flex-col " key={i}>
                  <div className={`flex justify-center flex-col  gap-2 `}>
                    <NavLink
                      to={tootherIcon.name}
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-black text-yellow-400 rounded-full "
                            : ""
                        } navLinkIcon p-1 `
                      }
                      onClick={closeOnClick}
                    >
                      <Icon icon={tootherIcon.icon} />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
