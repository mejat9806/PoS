import { TodayActivityProps } from "../DashBoard/TodayActivity";
import Table from "./Table";

type activityItemProps = { activity: TodayActivityProps };
function TodayActivityItem({ activity }: activityItemProps) {
  return (
    <Table.Row>
      <div className="tableStyle flex items-center justify-center">
        {activity.id}
      </div>
      <div className="tableStyle flex items-center justify-center">
        {activity.TableNo}
      </div>
      <div className=" font-roboto">
        {(
          activity.cart as { name: string; quantity: number; id: number }[]
        ).map((item) => (
          <span key={item.id}>
            {item.name} ({item.quantity})
            {item.id !== activity.cart.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div className="tableStyle flex items-center justify-center">
        {activity.total_price}
      </div>
      <div></div>
    </Table.Row>
  );
}

export default TodayActivityItem;
