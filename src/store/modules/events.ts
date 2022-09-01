import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventsInitialState {
  currentMonthIndex: number;
  currentYear: number;
  selectedDate: Date;
}

const initialState: EventsInitialState = {
  currentMonthIndex: new Date().getMonth() + 1,
  currentYear: new Date().getFullYear(),
  selectedDate: new Date(),
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setMonthIndex: (state, action: PayloadAction<number>) => {
      const monthIndex = action.payload;
      if (monthIndex < 1) {
        state.currentMonthIndex = 12;
        state.currentYear--;
      } else if (monthIndex > 11) {
        state.currentMonthIndex = 1;
        state.currentYear++;
      } else {
        state.currentMonthIndex = monthIndex;
      }
    },
    setToday: state => {
      state.currentMonthIndex = new Date().getMonth() + 1;
      state.currentYear = new Date().getFullYear();
    },
    setDaySelected: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload;
    },
  },
});

const { reducer } = eventSlice;
export const { setMonthIndex, setToday, setDaySelected } = eventSlice.actions;
export default reducer;
