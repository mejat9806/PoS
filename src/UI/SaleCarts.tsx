import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { OrderType } from "../Orders/getOrder";
import SaleCharts from "../utils/SaleCharts";
import { useEffect, useState } from "react";

export type OrderDataProps = {
  orderData: OrderType[];
  dataCategory: string[];
  label?: string;
};
function ItemSaleChart({ orderData, dataCategory, label }: OrderDataProps) {
  const [width, setWidth] = useState(500);
  const chartData = SaleCharts({ orderData, dataCategory });
  console.log(chartData);
  useEffect(() => {
    function chartWidth() {
      if (window.innerWidth > 1000) setWidth(600);
      else setWidth(400);
    }
    chartWidth();
    window.addEventListener("resize", chartWidth);
    return () => {
      window.removeEventListener("resize", chartWidth);
    };
  }, []);
  if (!orderData || orderData.length === 0) {
    return (
      <h1 className="flex  items-center justify-center font-roboto font-extrabold">
        No sale data to show
      </h1>
    );
  }
  console.log(width);
  return (
    <div className="flex flex-col items-center justify-center">
      <>
        <h1 className="text-center font-roboto font-extrabold capitalize">
          {label}
        </h1>
        <ResponsiveContainer width="100%" height={500} minWidth={width}>
          {chartData.length > 0 ? (
            <BarChart data={chartData} margin={{ top: 20, bottom: 100 }}>
              <CartesianGrid strokeDasharray="3 1" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                interval={0}
                fontSize={10}
              />
              <YAxis
                label={{ value: "Quantity", angle: -90, fontSize: 10 }}
                padding={{ top: 10 }}
                fontSize={10}
              />
              <Tooltip labelClassName="text-black font-roboto" />
              <Bar
                dataKey="quantity"
                fill="#ffd901"
                activeBar={<Rectangle fill="#e7cf45" stroke="yellow" />}
              />
            </BarChart>
          ) : (
            <div className="flex h-full items-center justify-center">
              <h1 className="font-roboto text-3xl capitalize">
                NO Data To show
              </h1>
            </div>
          )}
        </ResponsiveContainer>
      </>
    </div>
  );
}

export default ItemSaleChart;
