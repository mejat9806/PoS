import { IoFastFoodOutline } from "react-icons/io5";
import DashBoardSmallStuff from "./DashBoardSmallStuff";

import { MdOutlinePeopleOutline } from "react-icons/md";
import TodayActivity from "../DashBoard/TodayActivity";
import DashBoardFilter from "./DashBoardFilter";

function DashBoard() {
  return (
    <div className="">
      <div className="  my-10 flex justify-between">
        <h1 className=" mb-10 font-roboto text-4xl font-bold">DashBoard</h1>
        <div className="flex gap-4">
          <DashBoardFilter />
        </div>
      </div>
      <div className="flex gap-5">
        <DashBoardSmallStuff
          name="Order"
          icon=<IoFastFoodOutline size={40} />
          numOfOrder={1}
          bgColor="bg-teal-200"
        />
        <DashBoardSmallStuff
          name="Sales"
          icon=<MdOutlinePeopleOutline size={40} />
          sale={40000}
          bgColor="bg-blue-200"
        />
      </div>
      <main className="my-5 grid grid-cols-1">
        <TodayActivity />
      </main>
    </div>
  );
}

export default DashBoard;
