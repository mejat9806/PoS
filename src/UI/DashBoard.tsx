import { IoFastFoodOutline } from "react-icons/io5";
import DashBoardSmallStuff from "./DashBoardSmallStuff";

import { MdOutlinePeopleOutline } from "react-icons/md";
import TodayActivity from "../DashBoard/TodayActivity";
import DashBoardFilter from "./DashBoardFilter";
import useRecentOrder from "../DashBoard/useRecentOrder";
import Spinner from "./Spinner";
import useTodayActivity from "../DashBoard/useTodayActivity";
import Pagination from "./Pagination";
import useTodayActivityWidget from "../DashBoard/useTodayActivityWidget";
import { ChartSection } from "./ChartSection";

function DashBoard() {
  const { dataBasedOnDate, isLoadingDate } = useRecentOrder();
  const { isTodayActivity, todayActivity, countValue } = useTodayActivity();
  const { TodayOrderforWidget, isTodayActivityWidget } =
    useTodayActivityWidget();

  if (
    isTodayActivity ||
    !todayActivity ||
    isLoadingDate ||
    isTodayActivityWidget
  )
    return <Spinner />;
  const todayTotalSales = TodayOrderforWidget?.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );
  console.log();
  const TodayOrderTotal = TodayOrderforWidget?.length;
  const orderTotal = dataBasedOnDate?.length;
  const saleTotal = dataBasedOnDate?.reduce(
    (sum, item) => sum + item.total_price,
    0,
  );

  return (
    <div className="container mx-auto max-w-[100%] ">
      <div className="  flex w-full flex-col justify-between sm:my-10 sm:flex-row">
        <h1 className=" mb-10 font-roboto text-4xl font-bold">DashBoard</h1>
        <div className="flex gap-4 ">
          <DashBoardFilter />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-5 sm:flex-row ">
          <DashBoardSmallStuff
            name="Order"
            icon={<IoFastFoodOutline size={40} />}
            numOfOrder={orderTotal || TodayOrderTotal}
            bgColor="bg-teal-200"
          />
          <DashBoardSmallStuff
            name="Sales"
            icon={<MdOutlinePeopleOutline size={40} />}
            sale={saleTotal || todayTotalSales}
            bgColor="bg-blue-200"
          />
        </div>
        <main className="my-5 grid grid-cols-1">
          <section className="">
            <TodayActivity todayActivity={todayActivity} />
          </section>

          <Pagination countValue={countValue} />
        </main>
        <section>
          <ChartSection />
        </section>
      </div>
    </div>
  );
}

export default DashBoard;
