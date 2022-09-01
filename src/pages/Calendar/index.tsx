import React from 'react';
import Header from '../../components/Calendar/Header';
import Sidebar from '../../components/Calendar/Sidebar';

const Calendar = () => {
  return (
    <div className={'h-screen flex flex-col'}>
      <Header />
      <section className={'flex flex-1'}>
        <Sidebar />
      </section>
    </div>
  );
};

export default Calendar;
