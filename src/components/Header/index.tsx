import React from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const handleTodayBtnClick = () => {};

  const handlePrevMonth = () => {};

  const handleNextMonth = () => {};

  return (
    <header className="flex items-center py-2 px-4 border-b-[1px]">
      <img src={logo} alt="calendar-logo" className="mr-2 w-12 h-12" />
      <h1 className="mr-12 text-xl text-gray-500">캘린더</h1>
      <button
        type="button"
        onClick={handleTodayBtnClick}
        className="group border rounded px-3 py-1 mr-5 ml-5 text-gray-700 hover:bg-gray-100">
        오늘
        <p className="absolute bg-stone-500 text-white hidden text-center group-hover:block">
          Wed
        </p>
      </button>

      <button
        type="button"
        className="p-1 mx-1 hover:bg-gray-100 hover:rounded-full"
        onClick={handlePrevMonth}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        className="p-1 mx-1 hover:bg-gray-100 hover:rounded-full"
        onClick={handleNextMonth}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <h2 className="ml-4 text-xl text-gray-600">2022년 8월 - 9월</h2>
    </header>
  );
};

export default Header;
