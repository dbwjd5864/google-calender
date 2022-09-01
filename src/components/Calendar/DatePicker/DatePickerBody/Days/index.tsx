import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/useStore';
import { getMonthly } from '../../../../../utils/getMonthly';
import Button from '../../../../Common/Button';
import {
  setDaySelected,
  setMonthIndex,
} from '../../../../../store/modules/events';

const Days = () => {
  const { currentMonthIndex, currentYear, selectedDate } = useAppSelector(
    state => state.events,
  );
  const dispatch = useAppDispatch();

  const [monthlyData, setMonthlyData] = useState<Date[][]>();

  useEffect(() => {
    setMonthlyData(getMonthly(currentYear, currentMonthIndex));
  }, [currentMonthIndex]);

  const handleDateClick = (day: Date) => {
    dispatch(setMonthIndex(day.getMonth()));
    dispatch(setDaySelected(day));
  };

  return (
    <>
      {monthlyData?.map((week, i) => (
        <React.Fragment key={i}>
          {week.map((day, index) => {
            const currentDate = new Date();
            let className = '';

            if (day.getMonth() + 1 !== currentMonthIndex) {
              className = 'text-gray-500/80';
            } else if (
              currentDate.getDate() === day.getDate() &&
              currentDate.getMonth() === day.getMonth()
            ) {
              className = 'bg-blue-500 rounded-full text-white';
            } else if (
              selectedDate.getDate() === day.getDate() &&
              selectedDate.getMonth() === day.getMonth()
            ) {
              className = 'bg-blue-500/30 rounded-full text-blue-600';
            }

            return (
              <Button
                key={index}
                className={`py-1 w-full ${className}`}
                onClick={() => handleDateClick(day)}>
                <span className="text-xsm">{day.getDate()}</span>
              </Button>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
};

export default Days;
