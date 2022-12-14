import React, { useMemo, useRef, useState } from 'react';
import { getHours } from '../../../../utils/getHours';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useStore';
import { getThisWeek } from '../../../../utils/getThisWeek';
import {
  deleteEvent,
  setEventModalData,
} from '../../../../store/modules/events';
import { setEventModalOpen } from '../../../../store/modules/modal';
import { SelectedEvent } from '../../../../types/events';

const WeeklyCalendarBody = () => {
  const { currentDate } = useAppSelector(state => state.dates);
  const { events } = useAppSelector(state => state.events);
  const dispatch = useAppDispatch();

  const deletePopupContainerRef = useRef<HTMLDivElement>(null);

  const [selectedEventPosition, setSelectedEventPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(
    null,
  );

  const weekly = useMemo(() => {
    return getThisWeek(currentDate);
  }, [currentDate]);

  const hours = useMemo(() => {
    return getHours();
  }, []);

  const handleSelectedEvent = (
    e: React.MouseEvent<HTMLDivElement>,
    date: string,
    index: number,
  ) => {
    setSelectedEventPosition({ top: e.clientY, left: e.clientX });
    setSelectedEvent({ date, index });

    if (deletePopupContainerRef.current !== null) {
      deletePopupContainerRef.current.style.overflow = 'hidden';
    }
  };

  const handleNewEvent = (stringDate: string, hour: number, minute: string) => {
    const time = hour.toString() + minute;
    setSelectedEventPosition(null);
    dispatch(setEventModalData({ date: stringDate, startTime: time }));
    dispatch(setEventModalOpen());
  };

  const handleDeleteEvent = () => {
    if (selectedEvent !== null) {
      dispatch(deleteEvent(selectedEvent));
    }
    setSelectedEvent(null);
    setSelectedEventPosition(null);

    if (deletePopupContainerRef.current !== null) {
      deletePopupContainerRef.current.style.overflow = 'scroll';
    }
  };

  return (
    <div
      ref={deletePopupContainerRef}
      className="flex flex-1 max-h-[calc(100vh-9.3rem)] overflow-y-scroll">
      <div className="flex flex-col h-fit">
        {hours.map((hour, index) => {
          return (
            <div
              className="text-gray-500 text-xsm h-[55px] text-right pr-2"
              key={index}>
              {hour}
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 h-fit pt-2 md:ml-0">
        {weekly.map(({ date, stringDate }) => {
          return (
            <div
              className="flex flex-1 flex-col relative"
              key={`${date}-border`}>
              {hours.map((hour, index) => {
                return (
                  <div
                    key={`${hour}${index}`}
                    className="border-1 border-t border-l h-[55px]"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const y = e.clientY - rect.top;
                      let minute = '00';
                      if (y > 55 / 2) {
                        minute = '30';
                      }
                      handleNewEvent(stringDate, index, minute);
                    }}
                  />
                );
              })}
              {events[stringDate]?.map((event, index) => {
                const { title, start, end } = event;
                const startMinute = parseInt(start.slice(-2));
                const startHour = parseInt(start.slice(0, start.length - 2));

                const endMinute = parseInt(end.slice(-2));
                const endHour = parseInt(end.slice(0, end.length - 2));

                const top = startHour * 55 + startMinute;
                let height =
                  (endHour - startHour) * 55 + (endMinute - startMinute);

                if (height < 24) {
                  height = 24;
                }

                return (
                  <div
                    key={`${stringDate}${index}`}
                    style={{ top, height }}
                    className={`flex flex-wrap items-center absolute w-full text-white overflow-y-auto bg-blue-400 rounded p-1 text-[13px] cursor-pointer`}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      handleSelectedEvent(e, stringDate, index)
                    }>
                    <div className="mr-1">{title}</div>
                    <div className="hidden sm:block">
                      <span>
                        {startHour < 12 ? '??????' : '??????'}{' '}
                        {startHour !== 0 ? startHour : 12}
                      </span>
                      <span>{startMinute !== 0 && `:${startMinute}`}</span>
                      <span> ~ </span>
                      <span>
                        {endHour < 12 ? '??????' : '??????'}{' '}
                        {endHour !== 0 ? endHour : 12}
                      </span>
                      <span>{endMinute !== 0 && `:${endMinute}`}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {selectedEventPosition !== null && (
        <div
          className="fixed text-sm shadow rounded-lg bg-white cursor-pointer px-4 py-2"
          style={selectedEventPosition}
          onClick={handleDeleteEvent}>
          ??????
        </div>
      )}
    </div>
  );
};

export default WeeklyCalendarBody;
