import OrderItem from "./OrderItem";
type OrderStatus = "Pending" | "Cancel" | "Completed";
export type OrderType = { name: string; id: number; status: OrderStatus };
const exampleOrder: OrderType[] = [
  {
    name: "amer",
    id: Math.floor(Math.random() * 1000),
    status: "Pending",
  },
  {
    name: "ai",
    id: Math.floor(Math.random() * 1000),
    status: "Completed",
  },
  { name: "we", id: Math.floor(Math.random() * 1000), status: "Cancel" },
];
function Order() {
  return (
    <div className="flex space-x-5 border-2 border-transparent bg ">
      {exampleOrder.map((item) => (
        <OrderItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Order;
