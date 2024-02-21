import { OrderDataProps } from "../UI/SaleCarts";

type ItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  category: string;
};
function SaleCharts({ orderData, dataCategory }: OrderDataProps) {
  const itemSaleCounts: { [itemName: string]: number } = orderData.reduce(
    (acc, order) => {
      order.cart.forEach((item: ItemType) => {
        if (dataCategory.includes(item.category)) {
          if (!acc[item.name]) {
            acc[item.name] = 0;
          }
          acc[item.name] += item.quantity;
        }
      });
      return acc;
    },
    {} as { [itemName: string]: number },
  );
  const chartData = Object.keys(itemSaleCounts).map((name) => ({
    name,
    quantity: itemSaleCounts[name],
  }));
  return chartData;
}

export default SaleCharts;
