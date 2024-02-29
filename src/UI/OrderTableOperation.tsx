import SortBy from "./SortBy";
export type SortType = {
  value: string;
  label: string;
};
function OrderTableOperation() {
  return (
    <div className="mb-3 flex justify-end">
      <SortBy
        options={[
          {
            value: "id-asc",
            label: "Sort by ID (lowest to highest)",
          },
          {
            value: "id-desc",
            label: "Sort by ID (highest to lowest)",
          },
          {
            value: "total_price-asc",
            label: "Sort by Price (lowest to highest)",
          },
          {
            value: "total_price-desc",
            label: "Sort by Price (highest to lowest)",
          },
          {
            value: "created_at-asc",
            label: "Sort by Date (lowest to highest)",
          },
          {
            value: "created_at-desc",
            label: "Sort by Date (highest to lowest)",
          },
        ]}
      />
    </div>
  );
}

export default OrderTableOperation;
