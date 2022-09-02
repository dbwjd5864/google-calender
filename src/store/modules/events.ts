import { createSlice } from '@reduxjs/toolkit';

interface Time {
  hour: number;
  minute: number;
}

interface EventDetail {
  start: Time;
  end: Time;
  title: string;
}

interface EventsInitialState {
  [key: string]: EventDetail[];
}

const initialState: EventsInitialState = {};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {},
    deleteEvent: (state, action) => {},
  },
});

const { reducer } = eventsSlice;
export const { addEvent, deleteEvent } = eventsSlice.actions;
export default reducer;
