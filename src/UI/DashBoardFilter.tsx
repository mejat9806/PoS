import Filter from "./Filter";

function DashBoardFilter() {
  return (
    <div>
      <Filter
        filterField="last"
        options={[
          { value: "1", label: "Today" },
          { value: "7", label: " 7 days" },
          { value: "30", label: "30 days" },
          { value: "90", label: "90 days" },
        ]}
      />
    </div>
  );
}

export default DashBoardFilter;
