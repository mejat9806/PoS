import { useOrderData } from "../Orders/useOrderData";
import Spinner from "./Spinner";
type OrderStatus = "Pending" | "Cancel" | "Completed";
export type OrderType = { name: string; id: number; status: OrderStatus };
interface Order {
  id: number;
  created_at: string;
  cart: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
  }[];
  TableNo: number | null;
}
function Order() {
  const { orderData = [], loadingOrderdata } = useOrderData();
  if (loadingOrderdata) return <Spinner />;

  const orders: Order[] = [
    // Your orders data...
  ];

  const itemQuantities: { [itemId: number]: number } = {};

  orders.forEach((order) => {
    order.cart.forEach((item) => {
      if (item.id in itemQuantities) {
        itemQuantities[item.id] += item.quantity;
      } else {
        itemQuantities[item.id] = item.quantity;
      }
    });
  });

  console.log(itemQuantities);

  // Output the quantity of each item sold
  console.log("here", itemQuantities);

  return <div className="flex space-x-5 border-2 border-transparent bg "></div>;
}

export default Order;
