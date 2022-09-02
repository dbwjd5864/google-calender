import React from 'react';
import { DAYS } from '../../../../../constants';

const Weekdays = () => {
  return (
    <>
      {DAYS.map((day, i) => {
        return (
          <span key={i} className="self-center text-xsm text-gray-600">
            {day}
          </span>
        );
      })}
    </>
  );
};

export default React.memo(Weekdays);
