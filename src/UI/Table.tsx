/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext } from "react";

type TableContextType = {
  children?: React.ReactNode;
  columns: string;
};

const tableContext = createContext<TableContextType | undefined>(undefined);
function Table({ columns, children }: TableContextType) {
  return (
    <tableContext.Provider value={{ columns }}>
      <div className="overflow-hidden   bg-gray-50 text-lg ">{children}</div>
    </tableContext.Provider>
  );
}
function Header({ children }: { children: React.ReactNode }) {
  const contextValue = useContext(tableContext);
  if (!contextValue) {
    throw new Error("Header must be used within a Table component");
  }
  const { columns } = contextValue;
  console.log(columns);

  return (
    <div
      className={`grid-cols-${columns} grid grid-flow-col items-center gap-6 bg-slate-200 text-center font-semibold uppercase tracking-wider`}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  const contextValue = useContext(tableContext);
  if (!contextValue) {
    throw new Error("Header must be used within a Table component");
  }
  const { columns } = contextValue;
  return <div className={`grid-cols-${columns} grid    `}>{children}</div>;
}

type BodyData = {
  data: any[];
  render: (item: any, index: number) => ReactNode;
};
function Body({ data, render }: BodyData) {
  if (!data?.length)
    return (
      <h1 className="m-10    text-center text-2xl font-medium">
        No data to show at the moment{" "}
      </h1>
    );
  return <div>{data.map(render)}</div>; //this is using render props
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
