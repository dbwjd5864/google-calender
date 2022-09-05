const monthAndDayFormatter = (number: Number) => {
  if (number < 10) {
    return `0${number.toString()}`;
  }

  return number;
};

export const getStringDateFormat = (
  date: Date,
  formatter: string = '-',
): string => {
  const year = date.getFullYear();
  const month = monthAndDayFormatter(date.getMonth() + 1);
  const day = monthAndDayFormatter(date.getDate());

  return [year, month, day].join(formatter);
};
