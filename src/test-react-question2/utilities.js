function getAllDateInMonth() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDateOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const numberOfDates = lastDateOfMonth.getDate();

  const allDatesInMonth = [];

  for (let idx = -firstDateOfMonth.getDay() + 1; idx <= numberOfDates; idx++) {
    const date = new Date(currentYear, currentMonth, idx);
    if (idx < 0) console.log(date);
    allDatesInMonth.push(date);
  }

  return allDatesInMonth;
}

export { getAllDateInMonth };
