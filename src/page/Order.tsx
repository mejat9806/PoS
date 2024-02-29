import { useOrderData } from "../Orders/useOrderData";
import OrderDataTable from "../UI/OrderDataTable";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";
import TitleForPage from "../UI/TitleForPage";
import Pagination from "../UI/Pagination";

function Order() {
  const { orderData, loadingOrderdata, countValue } = useOrderData();
  //console.log(orderData, loadingOrderdata);
  if (loadingOrderdata) return <Spinner />;

  // Assuming orderData is your array of objects

  console.log(orderData);
  return (
    <div className="">
      <TitleForPage title="Order" />
      <div className="flex justify-center">
        <div className="w-1/2">
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
      {/*   {sortedOrderData?.map((data) => (
        <div>
          <h1>{formatDate(data.created_at)}</h1>
        </div>
      ))} */}
      <Pagination countValue={countValue} />
    </div>
  );
}

export default Order;
