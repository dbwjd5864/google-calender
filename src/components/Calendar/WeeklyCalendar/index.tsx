import React from 'react';
import WeeklyCalenderHeader from './WeeklyCalendarHeader';
import WeeklyCalendarBody from './WeeklyCalendarBody';

const WeeklyCalendar = () => {
  return (
    <section className="w-full flex flex-col mb-2">
      <div className="flex flex-col flex-1">
        <WeeklyCalenderHeader />
        <WeeklyCalendarBody />
      </div>
    </section>
  );
};

export default WeeklyCalendar;
