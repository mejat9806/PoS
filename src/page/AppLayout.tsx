import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../UI/SideBar";

function AppLayout() {
  const location = useLocation();
  return (
    <div className=" flex h-svh ">
      <SideBar />
      <div
        className={`${location.pathname === "/" ? "flex justify-center " : ""} ml-20 mt-4 w-svw `}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
