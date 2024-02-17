import { IoFastFoodOutline } from "react-icons/io5";
import DashBoardSmallStuff from "./DashBoardSmallStuff";

import { MdOutlinePeopleOutline } from "react-icons/md";
import TodayActivity from "../DashBoard/TodayActivity";
import DashBoardFilter from "./DashBoardFilter";
import useRecentOrder from "../DashBoard/useRecentOrder";
import Spinner from "./Spinner";
import useTodayActivity from "../DashBoard/useTodayActivity";

function DashBoard() {
  const { dataBasedOnDate, isLoadingDate } = useRecentOrder();
  const { isTodayActivity, todayActivity } = useTodayActivity();
  console.log(todayActivity);
  if (isTodayActivity || !todayActivity) return <Spinner />;
  if (isLoadingDate) {
    return <Spinner />;
  }
  const todayTotalSales = todayActivity.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );

  const TodayOrderTotal = todayActivity?.length;
  const orderTotal = dataBasedOnDate?.length;
  const saleTotal = dataBasedOnDate?.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );
  console.log(saleTotal);
  console.log(dataBasedOnDate, orderTotal);
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
          numOfOrder={orderTotal || TodayOrderTotal}
          bgColor="bg-teal-200"
        />
        <DashBoardSmallStuff
          name="Sales"
          icon=<MdOutlinePeopleOutline size={40} />
          sale={saleTotal || todayTotalSales}
          bgColor="bg-blue-200"
        />
      </div>
      <main className="my-5 grid grid-cols-1">
        <TodayActivity todayActivity={todayActivity} />
      </main>
    </div>
  );
}

export default DashBoard;
