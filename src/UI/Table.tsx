/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext } from "react";

type TableContextType = {
  children: React.ReactNode;
  columns: string;
};

const tableContext = createContext<TableContextType | undefined>(undefined);
function Table({ columns, children }: TableContextType) {
  return (
    <tableContext.Provider value={{ columns, children }}>
      <div className="overflow-hidden   bg-gray-50 text-lg ">{children}</div>
    </tableContext.Provider>
  );
}
function Header({ children }: { children: React.ReactNode }) {
  const contextValue = useContext(tableContext);
  const columns = contextValue ? contextValue.columns : ""; // Providing a default value

  return (
    <div
      className={`${columns} items-center bg-slate-200 py-4 text-center text-sm font-semibold uppercase `}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  const contextValue = useContext(tableContext);
  const columns = contextValue ? contextValue.columns : ""; // Providing a default value
  return <div className={`${columns} `}>{children}</div>;
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
