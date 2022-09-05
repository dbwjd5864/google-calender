import React from 'react';
import Header from '../../components/Calendar/Header';
import Sidebar from '../../components/Calendar/Sidebar';
import WeeklyCalendar from '../../components/Calendar/WeeklyCalendar';
import EventModal from '../../components/Calendar/EventModal';

const Calendar = () => {
  return (
    <div className={'h-screen flex flex-col overflow-hidden'}>
      <Header />
      <main className={'flex flex-1'}>
        <Sidebar />
        <WeeklyCalendar />
        <EventModal />
      </main>
    </div>
  );
};

export default Calendar;
