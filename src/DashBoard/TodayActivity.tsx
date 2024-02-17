import Menu from "../UI/Menus";
import Table from "../UI/Table";
import TodayActivityItem from "../UI/TodayActivityItem";

export type TodayActivityProps = {
  id: number;
  TableNo: number;
  cart: unknown[];
  total_price: number;
};
type activityProps = {
  todayActivity: TodayActivityProps[];
};
function TodayActivity({ todayActivity }: activityProps) {
  console.log(todayActivity);
  return (
    <div className="h-fit bg-white p-5">
      <h1 className="font-roboto text-2xl font-extrabold">Today Activity</h1>
      <div>
        <Menu>
          <Table columns={"grid grid-cols-todayActivity"}>
            <Table.Header>
              <div className=""> order ID</div>
              <div>Table Number</div>
              <div>Order</div>
              <div>Price</div>
            </Table.Header>
            <Table.Body
              data={todayActivity}
              render={(data) => (
                <TodayActivityItem activity={data} key={data.id} />
              )}
            />
          </Table>
        </Menu>
      </div>
    </div>
  );
}

export default TodayActivity;
