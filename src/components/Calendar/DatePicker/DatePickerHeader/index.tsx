import React from 'react';
import IconLeft from '../../../Common/IconLeft';
import Button from '../../../Common/Button';
import IconRight from '../../../Common/IconRight';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { setMonthIndex } from '../../../../store/modules/events';

const DatePickerHeader = () => {
  const { currentMonthIndex, currentYear } = useAppSelector(
    state => state.events,
  );
  // const [currentMonth, setCurrentMonth] = useState(currentMonthIndex);
  const dispatch = useAppDispatch();

  const handlePrevMonth = () => {
    dispatch(setMonthIndex(currentMonthIndex - 1));
  };

  const handleNextMonth = () => {
    dispatch(setMonthIndex(currentMonthIndex + 1));
  };

  return (
    <div className="mt-4 ml-4 flex items-center justify-between">
      <p className="text-sm text-gray-600">
        {currentYear}년 {currentMonthIndex}월
      </p>

      <div className="mr-2">
        <Button
          className="p-1 hover:bg-gray-100 hover:rounded-full"
          onClick={handlePrevMonth}>
          <IconLeft className="w-4 h-4" />
        </Button>
        <Button
          className="p-1 ml-2 hover:bg-gray-100 hover:rounded-full"
          onClick={handleNextMonth}>
          <IconRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default DatePickerHeader;
