import React, { useMemo } from 'react';
import { DAYS } from '../../../constants';
import { getThisWeek } from '../../../../utils/getThisWeek';
import { useAppSelector } from '../../../../hooks/useStore';

const WeeklyCalenderHeader = () => {
  const { selectedDate } = useAppSelector(state => state.dates);

  const weekly = useMemo(() => {
    return getThisWeek(selectedDate);
  }, [selectedDate]);

  return (
    <div className="flex ml-[50px]">
      {weekly.map((date, index) => {
        return (
          <div className="flex flex-1 flex-col pt-4" key={date.day}>
            <div
              className={`text-center font-light text-sm ${
                date.isToday ? 'text-blue-500' : 'text-gray-500'
              }`}>
              {DAYS[index]}
            </div>
            <div className="text-center font-light text-2xl p-1">
              <div
                className={`w-10 h-10 rounded-full m-auto flex justify-center items-center font-medium
                      ${
                        date.isToday
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-500'
                      }`}>
                {date.day}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyCalenderHeader;
