import { Outlet } from "react-router-dom";
import SideBar from "../UI/SideBar";

function AppLayout() {
  return (
    <div className=" flex h-screen">
      <SideBar />
      <div className=" ml-20 mr-5 sm:mx-18 xl:mx-auto xl:w-[80%] mt-4 w-screen ">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
