export const formatNumber = (value: number | undefined | null) => {
  if (value === undefined || value === null) {
    return "N/A";
  }
  return value.toLocaleString();
};
