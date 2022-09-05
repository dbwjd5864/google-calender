import React, { useMemo } from 'react';
import { getHours } from '../../../../utils/getHours';
import { useAppSelector } from '../../../../hooks/useStore';
import { getThisWeek } from '../../../../utils/getThisWeek';

const WeeklyCalendarBody = () => {
  const { selectedDate } = useAppSelector(state => state.dates);

  const weekly = useMemo(() => {
    return getThisWeek(selectedDate);
  }, [selectedDate]);

  const hours = useMemo(() => {
    return getHours();
  }, []);

  return (
    <div className="flex flex-1 max-h-[calc(100vh-9.3rem)] overflow-y-scroll">
      <div className="flex flex-col h-fit">
        {hours.map((hour, index) => {
          return (
            <div
              className="text-gray-500 text-xsm h-[55px] text-right pr-2"
              key={index}>
              {hour}
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 h-fit pt-2">
        {weekly.map(date => {
          return (
            <div className="flex flex-1 flex-col" key={`${date.day}-border`}>
              {hours.map((hour, index) => {
                return (
                  <div
                    key={`${hour}${index}`}
                    className="border-1 border-t border-l h-[55px]"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyCalendarBody;
