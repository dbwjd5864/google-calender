import React from 'react';
import Weekdays from './Week';
import Days from './Days';

const DatePickerBody = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-6 justify-items-center p-1 ml-1">
      <Weekdays />
      <Days />
    </div>
  );
};

export default DatePickerBody;
