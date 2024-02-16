import Filter from "./Filter";

function DashBoardFilter() {
  return (
    <div>
      <Filter
        filterField="last"
        options={[
          { value: "1", label: "Today" },
          { value: "7", label: "Last 7 days" },
          { value: "30", label: "Last 30 days" },
          { value: "90", label: "Last 90 days" },
        ]}
      />
    </div>
  );
}

export default DashBoardFilter;
