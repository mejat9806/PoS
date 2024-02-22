export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "MYR" }).format(
    value,
  );
// Supabase needs an ISO date string.
export const getToday = function () {
  const today = new Date();
  today.setDate(today.getDate());

  // Return only the date part in ISO format
  return today.toISOString().split("T")[0];
};
