import { OrderDataProps } from "../UI/SaleCarts";

type ItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
  category: string;
  totalSale: number;
};
function SaleCharts({ orderData = [], dataCategory }: OrderDataProps) {
  const itemSaleCounts: { [itemName: string]: number } = orderData.reduce(
    (acc, order) => {
      order.cart.forEach((item: ItemType) => {
        if (!dataCategory.includes(item.category)) {
          return; //if there the item is not include in the dataCategory it will return early skip the next if and do other item in cart  instead
        }
        if (!acc[item.name]) {
          acc[item.name] = 0; //if there is no item Name in the acc it will initialize will 0
        }
        acc[item.name] += item.quantity; //if there is  item Name in the acc it will initialize will increase the quantity by item.quantity
      });
      return acc;
    },
    {} as { [itemName: string]: number },
  );
  const chartData = Object.keys(itemSaleCounts).map((name) => ({
    name,
    quantity: itemSaleCounts[name],
  }));
  //chart data is array of object that generate from the key of the itemSaleCount and its corresponding value based on category

  return chartData;
}

export default SaleCharts;

//!explaination for the code

// The function SaleCharts takes two parameters: orderData, which is an array of orders, and dataCategory, an array specifying categories of interest.
// It initializes an empty object itemSaleCounts to track the total quantity sold for each item, with keys representing item names and number for the value .
// It uses the reduce method to iterate over each order in orderData, accumulating total quantities sold.
// Within each order, it loops through the items in the cart.
// If an item's category is included in dataCategory, its quantity is added to the corresponding count in itemSaleCounts.
// If the item name doesn't exist in itemSaleCounts, it initializes it with a quantity of 0.
// Once all orders are processed, itemSaleCounts contains total quantities sold for each item.
// The chartData is then generated by mapping over the keys of itemSaleCounts, creating an array of objects with item names and their corresponding quantities sold.
// Finally, chartData is returned.
