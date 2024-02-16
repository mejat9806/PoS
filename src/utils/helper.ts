export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "MYR" }).format(
    value,
  );
// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function () {
  const today = new Date();
  // Set time to the start or end of the day based on options

  // Return only the date part in ISO format
  return today.toISOString().split("T")[0];
};
