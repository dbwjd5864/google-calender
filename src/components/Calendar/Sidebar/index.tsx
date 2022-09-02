import React from 'react';
import Button from '../../Common/Button';
import plus from '../../../assets/images/plus.svg';
import DatePicker from './DatePicker';

const Sidebar = () => {
  const handleEventRegisterModal = () => {};

  return (
    <aside className={'h-full p-2 pt-3 basis-5/12'}>
      <Button
        onClick={handleEventRegisterModal}
        className="px-3 py-2 border rounded-full flex items-center shadow transition-shadow ease-in-out hover:bg-[#f6fafe] hover:shadow-2xl hover:shadow-[1px_8px_10px_0_rgba(60,64,67,0.3)]">
        <img src={plus} alt="event-register-button" className="w-8 h-8" />
        <span className="mx-5">만들기</span>
      </Button>
      <DatePicker />
    </aside>
  );
};

export default Sidebar;
