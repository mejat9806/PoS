import { useOrderData } from "../Orders/useOrderData";
import OrderDataTable from "../UI/OrderDataTable";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";
import TitleForPage from "../UI/TitleForPage";
import Pagination from "../UI/Pagination";
import OrderTableOperation from "../UI/OrderTableOperation";
import { useSearchParams } from "react-router-dom";
import { OrderType } from "../Orders/getOrder";

function Order() {
  const { orderData, loadingOrderdata, countValue } = useOrderData();
  const [searchParams] = useSearchParams();

  if (loadingOrderdata) return <Spinner />;
  const sortBy = searchParams.get("sortBy") || "";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1; //if it asc it wll be always positive because of the sort algo

  const sortedOrderData = orderData.slice().sort((a, b) => {
    if (field === "created_at") {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      console.log(dateA);
      return (dateA - dateB) * modifier;
    } else {
      const fieldValueA = a[field as keyof OrderType];
      const fieldValueB = b[field as keyof OrderType];

      if (typeof fieldValueA === "number" && typeof fieldValueB === "number") {
        return (fieldValueA - fieldValueB) * modifier;
      } else if (
        typeof fieldValueA === "string" &&
        typeof fieldValueB === "string"
      ) {
        return fieldValueA.localeCompare(fieldValueB) * modifier;
      } else {
        return 0;
      }
    }
  });

  return (
    <div className="">
      <TitleForPage title="Order" />
      <OrderTableOperation />
      <div className="flex justify-center">
        <div className="">
          <Table columns="grid grid-cols-orderTable">
            <Table.Header>
              <div className="tableHeader ">ID</div>
              <div className="tableHeader ">Date</div>
              <div className="tableHeader">Order</div>
              <div className="tableHeader">Price</div>
            </Table.Header>
            <Table.Body
              data={sortedOrderData}
              render={(data) => <OrderDataTable data={data} key={data.id} />}
            />
          </Table>
        </div>
      </div>
      <Pagination countValue={countValue} />
    </div>
  );
}

export default Order;
