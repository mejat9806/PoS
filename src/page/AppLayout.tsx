import { Outlet } from "react-router-dom";
import SideBar from "../UI/SideBar";

function AppLayout() {
  return (
    <div className=" flex h-full">
      <SideBar />
      <div className=" ml-20 xl:w-full mt-4 w-screen ">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
