import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { OrderType } from "../Orders/getOrder";
import SaleCharts from "../utils/SaleCharts";

export type OrderDataProps = {
  orderData: OrderType[];
  dataCategory: string[];
};
function ItemSaleChart({ orderData, dataCategory }: OrderDataProps) {
  const chartData = SaleCharts({ orderData, dataCategory });
  if (!orderData || orderData.length === 0) {
    return (
      <h1 className="flex  items-center justify-center font-roboto font-extrabold">
        No sale data to show
      </h1>
    );
  }
  return (
    <BarChart
      width={500}
      height={500}
      data={chartData}
      margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        angle={-45}
        textAnchor="end"
        interval={0}
        fontSize={10}
      />
      <YAxis label={{ value: "Quantity", angle: -90 }} />
      <Tooltip />
      <Bar dataKey="quantity" fill="#8884d8" />
    </BarChart>
  );
}

export default ItemSaleChart;
