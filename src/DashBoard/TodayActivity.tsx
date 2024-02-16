import { OrderType } from "../Orders/getOrder";
import Menu from "../UI/Menus";
import Spinner from "../UI/Spinner";
import Table from "../UI/Table";
import TodayActivityItem from "../UI/TodayActivityItem";
import useTodayActivity from "./useTodayActivity";

export type TodayActivityProps = {
  activity: OrderType;
};

function TodayActivity() {
  const { isTodayActivity, todayActivity } = useTodayActivity();
  console.log(todayActivity);
  if (isTodayActivity || !todayActivity) return <Spinner />;
  return (
    <div className="h-fit bg-white p-5">
      <h1 className="font-roboto text-2xl font-extrabold">Today Activity</h1>
      <div>
        <Menu>
          <Table columns="todayActivity">
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
