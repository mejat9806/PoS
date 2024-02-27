import { parseISO } from "date-fns";
import { useOrderData } from "../Orders/useOrderData";
import OrderDataTable from "../UI/OrderDataTable";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";
import TitleForPage from "../UI/TitleForPage";

function Order() {
  const { orderData, loadingOrderdata } = useOrderData();
  //console.log(orderData, loadingOrderdata);
  if (loadingOrderdata) return <Spinner />;

  // Assuming orderData is your array of objects
  const sortedOrderData = orderData?.sort((a, b) => {
    const dateA = parseISO(a.created_at);
    const dateB = parseISO(b.created_at);
    return dateA.getTime() - dateB.getTime();
  });

  console.log(sortedOrderData);

  console.log(sortedOrderData);
  return (
    <div className="">
      <TitleForPage title="Order" />
      <div className="flex justify-center">
        <div className="w-1/2">
          <Table columns="grid grid-cols-todayActivity">
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
      {/*   {sortedOrderData?.map((data) => (
        <div>
          <h1>{formatDate(data.created_at)}</h1>
        </div>
      ))} */}
    </div>
  );
}

export default Order;
