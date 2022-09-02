interface Day {
  isToday: boolean;
  day: number;
}

export const getThisWeek = (selectedDate: string): Day[] => {
  const date = new Date(selectedDate);
  const today = new Date();

  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  let diff = date.getDate() - day;

  const currentWeek = Array.from({ length: 7 }, () => {
    const date = new Date(year, month, diff++);

    return {
      isToday:
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth(),
      day: date.getDate(),
    };
  });

  return currentWeek;
};
