import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const today = new Date();

interface DatesInitialState {
  currentDate: string;
  currentMonthIndex: number;
  currentYear: number;
  selectedDate: string;
}

const initialState: DatesInitialState = {
  currentDate: today.toLocaleDateString(),
  currentMonthIndex: today.getMonth(),
  currentYear: today.getFullYear(),
  selectedDate: today.toLocaleDateString(),
};

const handleDateFormat = (state: Draft<DatesInitialState>, date: Date) => {
  state.selectedDate = date.toLocaleDateString();
  state.currentDate = date.toLocaleDateString();
  state.currentMonthIndex = date.getMonth();
  state.currentYear = date.getFullYear();
};

const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      const current = new Date(action.payload);

      handleDateFormat(state, current);
    },
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
      handleDateFormat(state, today);
    },
    setDaySelected: (state, action: PayloadAction<string>) => {
      const current = new Date(action.payload);

      handleDateFormat(state, current);
    },
  },
});

const { reducer } = datesSlice;
export const { setCurrentDate, setMonthIndex, setToday, setDaySelected } =
  datesSlice.actions;
export default reducer;
