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
import SaleCarts from "./SaleCarts";
import { useSearchParams } from "react-router-dom";

function DashBoard() {
  const { dataBasedOnDate, isLoadingDate } = useRecentOrder();
  const [searchParams] = useSearchParams();
  const dateForChart = searchParams.get("last");
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
        <h1 className="font-roboto text-4xl font-bold">Sale Chart</h1>
        {!dataBasedOnDate || dataBasedOnDate.length === 0 ? (
          <h1 className="flex  items-center justify-center font-roboto font-extrabold">
            No sale data to show
          </h1>
        ) : (
          <div className="grid grid-cols-2 gap-10">
            <SaleCarts
              label={`BBQ sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["bbq_chicken", "bbq_beef", "bbq_fish"]}
            />
            <SaleCarts
              label={`Burger sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["burger_beef", "burger_chicken"]}
            />
            <SaleCarts
              label={`Special Menu sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["special_beef", "special_sandwich"]}
            />
            <SaleCarts
              label={`Pizza sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["pizza"]}
            />
            <SaleCarts
              label={`Sides sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["sides"]}
            />
            <SaleCarts
              label={`Drinks sale for ${dateForChart} days `}
              orderData={dataBasedOnDate}
              dataCategory={["drink"]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
