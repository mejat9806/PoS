import { ReactNode } from "react";
import { formatCurrency } from "../utils/helper";

function DashBoardSmallStuff({
  name,
  icon,
  numOfOrder,
  bgColor,
  sale,
}: {
  name: string;
  icon?: ReactNode;
  numOfOrder?: number;
  bgColor: string;
  sale?: number;
}) {
  return (
    <div className="flex w-full items-center gap-x-2 bg-white p-3">
      <i className={`rounded-full  p-4 text-center ${bgColor}`}>{icon}</i>
      <div className="flex flex-col font-roboto">
        <h1 className="font-semibold text-gray-600">{name}</h1>
        {numOfOrder && (
          <h2 className="  font-semibold ">{numOfOrder ? numOfOrder : 0}</h2>
        )}
        {sale && (
          <h2 className="  font-semibold ">
            {formatCurrency(sale ? sale : 0)}
          </h2>
        )}
      </div>
    </div>
  );
}

export default DashBoardSmallStuff;
