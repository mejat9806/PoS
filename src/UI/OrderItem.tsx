import { useNavigate } from "react-router-dom";
import { OrderType } from "./Order";

type PropsType = { data: OrderType };
function OrderItem({ data }: PropsType) {
  const getBackground = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200";
      case "Cancel":
        return "bg-red-200";
      case "Completed":
        return "bg-green-200 ";
      // Add more cases for other statuses as needed
      default:
        return "bg-gray-200";
    }
  };
  const navigate = useNavigate();
  return (
    <div className="flex ">
      <div
        onClick={() => navigate(`/order/${data.id}`)}
        className={`${getBackground(
          data.status,
        )} p-1 rounded-md font-bold border-2 hover:border-black border-transparent  space-x-4 cursor-pointer text-sm`}
      >
        <h1>Order#{data.id}</h1>
      </div>
    </div>
  );
}

export default OrderItem;
