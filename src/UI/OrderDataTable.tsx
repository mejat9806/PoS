import { OrderType } from "../Orders/getOrder";
import { formatCurrency, formatDate } from "../utils/helper";
import Table from "./Table";

type dataPropType = {
  data: OrderType;
};

function OrderDataTable({ data }: dataPropType) {
  return (
    <Table.Row>
      <div className="tableStyle flex items-center justify-center text-xs capitalize sm:text-base">
        {data.id}
      </div>
      <div className="tableStyle w-full font-roboto text-xs capitalize sm:text-base">
        {formatDate(data.created_at)}
      </div>
      <div className="tableStyle text-xs capitalize sm:text-base ">
        {data.cart.map(
          (cart: { name: string; id: number; quantity: number }) => (
            <span
              key={cart.id}
              className="flex  items-center justify-center font-roboto text-xs capitalize sm:text-base"
            >
              {cart.name} ({cart.quantity})
              {cart.id !== data.cart.length - 1 && ","}
            </span>
          ),
        )}
      </div>
      <div className="tableStyle flex items-center justify-center text-xs capitalize sm:text-base">
        {formatCurrency(data.total_price)}
      </div>
    </Table.Row>
  );
}

export default OrderDataTable;
