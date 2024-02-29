import useRecentOrder from "../DashBoard/useRecentOrder";
import Spinner from "./Spinner";

import SaleCarts from "./SaleCarts";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ChartSlider from "./ChartSlider";
import useTodayActivity from "../DashBoard/useTodayActivity";

export function ChartSection() {
  const { dataBasedOnDate, isLoadingDate } = useRecentOrder();
  const { isTodayActivity, todayActivity } = useTodayActivity();
  todayActivity, dataBasedOnDate;
  const [openChart, setOpenChart] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  if (isLoadingDate || isTodayActivity) return <Spinner />;
  const chartData =
    searchParams.get("last") !== "1" ? dataBasedOnDate : todayActivity;
  const dateForChart = !searchParams.get("last") ? 1 : searchParams.get("last");
  const saleCartSliderItem = [
    <SaleCarts
      label={`BBQ sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["bbq_chicken", "bbq_beef", "bbq_fish"]}
    />,
    <SaleCarts
      label={`Burger sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["burger_beef", "burger_chicken"]}
    />,
    <SaleCarts
      label={`Special Menu sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["special_beef", "special_sandwich"]}
    />,
    <SaleCarts
      label={`Pizza sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["pizza"]}
    />,
    <SaleCarts
      label={`Sides sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["sides"]}
    />,
    <SaleCarts
      label={`Drinks sale for ${dateForChart} days `}
      orderData={chartData || []}
      dataCategory={["drink"]}
    />,
  ];
  return (
    <>
      <div
        className={`container mx-auto max-w-[100%] ${openChart ? "h-full" : "h-full"}`}
      >
        <div className="flex justify-between">
          <h1
            className="  stroke-1 font-roboto text-4xl font-bold   hover:text-yellow-300 "
            onClick={() => setOpenChart((prev) => !prev)}
          >
            Sale Chart
          </h1>
          <button onClick={() => setOpenChart((prev) => !prev)}>
            {openChart ? (
              <IoIosArrowDown className="rounded-full hover:bg-gray-400/30" />
            ) : (
              <IoIosArrowUp className="rounded-full hover:bg-gray-400/30" />
            )}
          </button>
        </div>
        {openChart ? (
          <section>
            {!dataBasedOnDate || dataBasedOnDate.length === 0 ? (
              <h1 className="flex  items-center justify-center font-roboto font-extrabold">
                No sale data to show
              </h1>
            ) : (
              <ChartSlider saleCartSliderItem={saleCartSliderItem} />
            )}
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
{
  /* <SaleCarts
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
                /> */
}
