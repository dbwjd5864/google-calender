import React, { useMemo } from 'react';

import { getThisWeek } from '../../../utils/getThisWeek';
import { useAppSelector } from '../../../hooks/useStore';
import { DAYS } from '../../constants';

const WeeklyCalendar = () => {
  const { selectedDate } = useAppSelector(state => state.dates);

  const weekly = useMemo(() => {
    return getThisWeek(selectedDate);
  }, [selectedDate]);

  return (
    <section className="overflow-auto w-full flex flex-col mb-2">
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 flex bg-white z-20">
          {weekly.map((date, index) => {
            let className = '';

            if (date.isToday) {
              className = 'bg-blue-500 text-white';
            }

            return (
              <div
                className="flex-1 min-w-[81px] flex flex-col bg-white z-20 pt-4"
                key={date.day}>
                <div
                  className={`text-center font-light text-sm ${
                    date.isToday ? 'text-blue-500' : 'text-gray-500'
                  }`}>
                  {DAYS[index]}
                </div>
                <div className="text-center font-light text-2xl p-1">
                  <div
                    className={`w-10 h-10 rounded-full m-auto flex justify-center items-center text-gray-500 font-medium
                      ${className}`}>
                    {date.day}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklyCalendar;
