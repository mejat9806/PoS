import { useState } from "react";
import Nav from "./Nav";

function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`bg-yellow-400 ${
        open ? "w-60" : "w-16"
      } transition-all duration-100 h-screen fixed z-50 `}
    >
      <Nav setOpen={setOpen} open={open} />
    </div>
  );
}

export default SideBar;
