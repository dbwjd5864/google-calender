import React from 'react';
import Button from '../../Common/Button';
import plus from '../../../assets/images/plus.svg';
import DatePicker from './DatePicker';
import { useAppDispatch } from '../../../hooks/useStore';
import { setEventModalOpen } from '../../../store/modules/modal';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <aside className={'h-full p-2 pt-3 w-80'}>
      <Button
        onClick={() => dispatch(setEventModalOpen())}
        className="px-3 py-2 border rounded-full flex items-center shadow transition-shadow ease-in-out hover:bg-[#f6fafe] hover:shadow-2xl hover:shadow-[1px_8px_10px_0_rgba(60,64,67,0.3)]">
        <img src={plus} alt="event-register-button" className="w-8 h-8" />
        <span className="mx-5">만들기</span>
      </Button>
      <DatePicker />
    </aside>
  );
};

export default Sidebar;
