import { TodayActivityProps } from "../DashBoard/TodayActivity";
import { formatCurrency } from "../utils/helper";
import Table from "./Table";

type activityItemProps = { activity: TodayActivityProps };
function TodayActivityItem({ activity }: activityItemProps) {
  return (
    <Table.Row>
      <div className="tableStyle flex items-center justify-center text-sm ">
        {activity.id}
      </div>
      <div className="tableStyle flex items-center justify-center text-sm">
        {activity.TableNo}
      </div>
      <div className="text-center">
        {(
          activity.cart as { name: string; quantity: number; id: number }[]
        ).map((item) => (
          <span key={item.id} className="text-sm">
            {item.name} ({item.quantity})
            {item.id !== activity.cart.length - 1 && ", "}
          </span>
        ))}
      </div>
      <div className="tableStyle flex items-center justify-center text-sm">
        {formatCurrency(activity.total_price)}
      </div>
    </Table.Row>
  );
}

export default TodayActivityItem;
