import { OrderType } from "../Orders/getOrder";
import { formatCurrency, formatDate } from "../utils/helper";
import Table from "./Table";

type dataPropType = {
  data: OrderType;
};

function OrderDataTable({ data }: dataPropType) {
  return (
    <Table.Row>
      <div className="tableStyle">{data.id}</div>
      <div className="tableStyle w-full font-roboto">
        {formatDate(data.created_at)}
      </div>
      <div className="tableStyle">
        {data.cart.map(
          (cart: { name: string; id: number; quantity: number }) => (
            <span key={cart.id} className="font-roboto  capitalize">
              {cart.name} ({cart.quantity})
              {cart.id !== data.cart.length - 1 && ", "}
            </span>
          ),
        )}
      </div>
      <div className="tableStyle">{formatCurrency(data.total_price)}</div>
    </Table.Row>
  );
}

export default OrderDataTable;
