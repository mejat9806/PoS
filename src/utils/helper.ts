export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "MYR" }).format(
    value,
  );
