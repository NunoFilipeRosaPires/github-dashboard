export const addMonths = (date: Date, months: number) => {
  date.setMonth(date.getMonth() + months);
  return date;
};
