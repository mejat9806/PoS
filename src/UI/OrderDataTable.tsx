import { orderDataType } from "../Cart/Cart";
import { formatDate } from "../utils/helper";
import Table from "./Table";

type dataPropType = {
  data: orderDataType;
};

function OrderDataTable({ data }: dataPropType) {
  return (
    <Table.Row>
      <div>{data.id}</div>
      <div className="w-full">{formatDate(data.created_at)}</div>
    </Table.Row>
  );
}

export default OrderDataTable;
