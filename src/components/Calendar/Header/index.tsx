import React from 'react';
import logo from '../../../assets/images/logo.png';
import Button from '../../Common/Button';
import IconLeft from '../../Common/IconLeft';
import IconRight from '../../Common/IconRight';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import { setToday } from '../../../store/modules/events';

const Header = () => {
  const { currentMonthIndex, currentYear } = useAppSelector(
    state => state.events,
  );
  const dispatch = useAppDispatch();

  const handleTodayBtnClick = () => {
    dispatch(setToday());
  };

  const handlePrevWeek = () => {};

  const handleNextWeek = () => {};

  return (
    <header className="flex items-center py-2 px-4 border-b-[1px]">
      <img src={logo} alt="calendar-logo" className="mr-2 w-12 h-12" />
      <h1 className="mr-12 text-xl text-gray-500">캘린더</h1>
      <Button
        onClick={handleTodayBtnClick}
        className="group border rounded px-3 py-1 mr-5 ml-5 hover:bg-gray-100">
        오늘
        <p className="absolute bg-stone-500 text-white hidden text-center group-hover:block">
          Wed
        </p>
      </Button>

      <Button
        className="p-1 mx-1 hover:bg-gray-100 hover:rounded-full"
        onClick={handlePrevWeek}>
        <IconLeft className="w-5 h-5" />
      </Button>
      <Button
        className="p-1 mx-1 hover:bg-gray-100 hover:rounded-full"
        onClick={handleNextWeek}>
        <IconRight className="w-5 h-5" />
      </Button>

      <h2 className="ml-4 text-xl text-gray-600">
        {currentYear}년 {currentMonthIndex}월 - 9월
      </h2>
    </header>
  );
};

export default Header;
