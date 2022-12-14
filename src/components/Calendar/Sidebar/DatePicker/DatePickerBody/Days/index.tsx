import React, { useMemo } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../hooks/useStore';
import { getMonthly } from '../../../../../../utils/getMonthly';
import Button from '../../../../../Common/Button';
import {
  setCurrentDate,
  setMonthIndex,
} from '../../../../../../store/modules/dates';

const Days = () => {
  const dates = useAppSelector(state => state.dates);
  const dispatch = useAppDispatch();
  const { currentDate, currentMonthIndex, currentYear } = dates;

  // const [monthlyData, setMonthlyData] = useState<Date[][]>();

  // useEffect(() => {
  //   setMonthlyData(getMonthly(currentYear, currentMonthIndex));
  // }, [currentMonthIndex, currentDate]);

  const monthlyData = useMemo(() => {
    return getMonthly(currentYear, currentMonthIndex);
  }, [currentMonthIndex, currentDate]);

  const handleDateClick = (day: Date) => {
    if (day.getMonth() !== currentMonthIndex) {
      dispatch(setMonthIndex(day.getMonth()));
    }

    dispatch(setCurrentDate(day.toLocaleDateString()));
  };

  return (
    <>
      {monthlyData?.map((week, i) => (
        <React.Fragment key={i}>
          {week.map((day, index) => {
            const date = new Date();
            let className = '';

            if (
              day.getMonth() !== currentMonthIndex &&
              date.getDate() !== day.getDate()
            ) {
              className = 'text-gray-500/80';
            } else if (
              date.getDate() === day.getDate() &&
              date.getMonth() === day.getMonth()
            ) {
              className =
                'bg-blue-500 rounded-full text-white hover:bg-blue-600';
            } else if (currentDate === day.toLocaleDateString()) {
              className =
                'bg-blue-500/30 rounded-full text-blue-600 hover:bg-blue-500/50';
            }

            return (
              <Button
                key={index}
                className={`py-1 w-full hover:bg-gray-100 hover:rounded-full ${className}`}
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
