type tableNumberProps = {
  setTableNo: (string: string | number) => void;
  tableNo: string | number;
};

function TableNumber({ setTableNo, tableNo }: tableNumberProps) {
  const array = Array.from({ length: 6 }, (_, index) => index + 1);
  function handleSetTableNo(e: React.ChangeEvent<HTMLSelectElement>) {
    const tableNum = Number(e.target.value);
    setTableNo(tableNum);
  }
  return (
    <label htmlFor="tableNo" className="flex gap-4 items-center mx-3 mt-7">
      <h1 className="capitalize font-roboto">table No : </h1>
      <select
        id="tableNo"
        value={tableNo}
        className={`disabled:bg-slate-300 disabled:cursor-not-allowed bg-slate-100 rounded-md focus:outline-none focus:ring  p-2 uppercase`}
        onChange={handleSetTableNo}
      >
        <option disabled={true}>select table</option>
        {array.map((tableNo) => (
          <option key={tableNo}>{tableNo}</option>
        ))}
      </select>
    </label>
  );
}

export default TableNumber;
