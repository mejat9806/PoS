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

  orderData?.sort((a, b) => {
    if (field === "created_at") {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      dateA;
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
    <div>
      <TitleForPage title="Order" />
      <div className="mb-11 flex flex-col">
        <div className="flex w-full justify-center">
          <div className="w-full  sm:mx-10 xl:w-1/2">
            <OrderTableOperation />
            <Table columns="grid grid-cols-orderTable">
              <Table.Header>
                <div className="tableHeader ">ID</div>
                <div className="tableHeader ">Date</div>
                <div className="tableHeader">Order</div>
                <div className="tableHeader">Price</div>
              </Table.Header>
              <Table.Body
                data={orderData}
                render={(data) => <OrderDataTable data={data} key={data.id} />}
              />
            </Table>
          </div>
        </div>
        <div className="mb-10">
          <Pagination countValue={countValue} />
        </div>
      </div>
    </div>
  );
}

export default Order;
