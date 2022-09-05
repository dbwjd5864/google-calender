import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EventDetail {
  start: string;
  end: string;
  title: string;
}

export interface NewEvent {
  date: string;
  eventDetail: EventDetail;
}

interface EventsInitialState {
  events: { [key: string]: EventDetail[] };
}

const initialState: EventsInitialState = {
  events: {},
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<NewEvent>) => {
      const { date, eventDetail } = action.payload;
      if (state.events[date] === undefined) {
        state.events[date] = [];
      }

      state.events[date].push(eventDetail);
    },
    deleteEvent: (state, action) => {},
  },
});

const { reducer } = eventsSlice;
export const { addEvent, deleteEvent } = eventsSlice.actions;
export default reducer;
