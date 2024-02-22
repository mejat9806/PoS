import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { OrderType } from "../Orders/getOrder";
import SaleCharts from "../utils/SaleCharts";

export type OrderDataProps = {
  orderData: OrderType[];
  dataCategory: string[];
  label?: string;
};
function ItemSaleChart({ orderData, dataCategory, label }: OrderDataProps) {
  const chartData = SaleCharts({ orderData, dataCategory });
  if (!orderData || orderData.length === 0) {
    return (
      <h1 className="flex  items-center justify-center font-roboto font-extrabold">
        No sale data to show
      </h1>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-roboto font-extrabold capitalize">
        {label}
      </h1>
      <BarChart
        width={500}
        height={500}
        data={chartData}
        margin={{ top: 20, bottom: 100 }}
      >
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
        <Tooltip />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ItemSaleChart;
