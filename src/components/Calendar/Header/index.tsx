import React, { useMemo } from 'react';
import logo from '../../../assets/images/logo.png';
import Button from '../../Common/Button';
import IconLeft from '../../Common/IconLeft';
import IconRight from '../../Common/IconRight';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { setCurrentDate, setToday } from '../../../store/modules/dates';
import { getStringDateFormat } from '../../../utils/getStringDateFormat';

const Header = () => {
  const { currentDate } = useAppSelector(state => state.dates);
  const dispatch = useAppDispatch();

  const displayDate = useMemo(() => {
    const date = new Date(currentDate);

    const firstDayOfTheMonth = date.getDay();

    if (date.getDate() <= firstDayOfTheMonth) {
      return `${date.getFullYear()}년 ${date.getMonth()}월 ~ ${
        date.getMonth() + 1
      }월`;
    } else {
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
    }
  }, [currentDate]);

  const handleTodayBtnClick = () => {
    dispatch(setToday());
  };

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentDate);
    prevWeek.setDate(new Date(currentDate).getDate() - 7);

    dispatch(setCurrentDate(prevWeek.toLocaleDateString()));
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentDate);
    nextWeek.setDate(new Date(currentDate).getDate() + 7);

    dispatch(setCurrentDate(nextWeek.toLocaleDateString()));
  };

  return (
    <header className="flex items-center py-2 px-4 border-b-[1px] justify-between w-full h-48">
      <div className="flex items-center">
        <img
          src={logo}
          alt="calendar-logo"
          className="mr-2 w-12 h-12 hidden sm:block"
        />
        <h1 className="mr-12 text-lg text-gray-500 hidden sm:block">캘린더</h1>
        <Button
          onClick={handleTodayBtnClick}
          className="group border rounded px-3 py-1 mr-5 ml-5 hover:bg-gray-100">
          오늘
          <p className="absolute p-2 bg-stone-500 text-white rounded hidden text-center group-hover:block">
            {getStringDateFormat(new Date(), '-')}
          </p>
        </Button>

        <Button
          className="p-1 sm:mx-1 hover:bg-gray-100 hover:rounded-full"
          onClick={handlePrevWeek}>
          <IconLeft className="w-5 h-5" />
        </Button>
        <Button
          className="p-1 sm:mx-1 hover:bg-gray-100 hover:rounded-full"
          onClick={handleNextWeek}>
          <IconRight className="w-5 h-5" />
        </Button>

        <h2 className="ml-4 text-md sm:text-xl text-gray-600">{displayDate}</h2>
      </div>

      <div className="flex items-center">
        <span className="px-3 py-1 border rounded">주</span>
      </div>
    </header>
  );
};

export default Header;
