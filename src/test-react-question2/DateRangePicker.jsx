/* ANSWER */

import { useState } from 'react';

import { getAllDateInMonth } from './utilities';
import DateHeader from './DateHeader';
import DateItem from './DateItem';

const dateArr = getAllDateInMonth().map((date) => ({
  month: date.getMonth(),
  weekday: date.toLocaleDateString('zh-TW', { weekday: 'long' }).slice(2),
  monthday: date.getDate(),
}));

const defaultRange = {
  startDate: 0,
  endDate: dateArr[dateArr.length - 1].monthday + 1,
};

console.log(dateArr);
console.log(defaultRange);

function DateRangePicker() {
  const [startDate, setStartDate] = useState(defaultRange.startDate);
  const [endDate, setEndDate] = useState(defaultRange.endDate);

  function isDefaultRange() {
    return (
      startDate === defaultRange.startDate || endDate === defaultRange.endDate
    );
  }

  function handleClick(clickDate) {
    if (isDefaultRange() || clickDate === startDate || clickDate === endDate) {
      setStartDate(clickDate);
      setEndDate(clickDate);
    } else if (clickDate < startDate) {
      setStartDate(clickDate);
    } else if (endDate < clickDate) {
      setEndDate(clickDate);
    } else {
      const distStart = clickDate - startDate;
      const distEnd = endDate - clickDate;
      if (distStart < distEnd) {
        setStartDate(clickDate);
      } else {
        setEndDate(clickDate);
      }
    }
  }

  function getDateClass(date) {
    const curDate = new Date();

    if (date.month !== curDate.getMonth()) return 'non-current';

    if (date.monthday === curDate.getDate()) return 'today';

    if (isDefaultRange()) return '';

    if (startDate <= date.monthday && date.monthday <= endDate) {
      return 'active';
    }
  }

  // console.log('s:', startDate, 'e:', endDate);

  return (
    <div className="picker">
      <DateHeader />
      <div className="calendar">
        {dateArr.map((date) => (
          <DateItem
            key={[date.month, date.monthday]}
            date={date}
            handleClick={handleClick}
            buttonClass={getDateClass(date)}
          />
        ))}
      </div>
    </div>
  );
}

export default DateRangePicker;

/*
React Component Overview

Browser Support:
Chrome / Edge / Firefox

Deliverable:
1. All HTML/CSS/JS files containing the answers to the questions. (task 1 or task 2)
2. README.md containing the instruction to build and run the code.

Evaluation Criteria:
1. Feature completeness.
2. Coding style.
3. Source code structure.
4. Reusability and extensibility.

Layout
Width: 350px
Height: 240px
Font-size: 16px

Header:
Width: 350px
Height: 44px
Margin-bottom: 16px

Month Select:
Width: 44px
Height: 44px
Background-color (default): white
Background-color (hover): #e6e6e6

Day Button:
Width: 50px
Height: 36px

Day State:
Default: white
Hover: #e6e6e6
Today: #ffff76
Active: #006edc
Non-Current Month: #757575

Scenario (Choose one of the following tasks):

Task – 1 (Date Range Component for current month)

A:
1. First click date to set it as start date value.
2. Next click date is same as current select option or later than current
option will set it as end date value.
3. Next click date is earlier than current option will reset start date
value.

B:
1. Show not-allowed icon when hovering on “Non-Current Month” day.
2. Disable day click.

C:
1. Show current month.

D:
1. No actions.

Limination:
1. Do not use any 3th party datetime picker components.
(ex: DateTimepicker, DatePicket etc.)
2. Allow to use date format library
(ex: Moment.js, Date-fns).
3. Do not use any 3th party utility library.
(ex: Lodash, Underscore etc.)
4. Bonus: Unit test.
*/
