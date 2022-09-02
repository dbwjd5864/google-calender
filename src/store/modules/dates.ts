import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DatesInitialState {
  currentDate: string;
  currentMonthIndex: number;
  currentYear: number;
  selectedDate: string;
}

const today = new Date();

const initialState: DatesInitialState = {
  currentDate: today.toLocaleDateString(),
  currentMonthIndex: today.getMonth(),
  currentYear: today.getFullYear(),
  selectedDate: today.toLocaleDateString(),
};

const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => {
      const current = new Date(action.payload);

      state.currentDate = action.payload;
      state.selectedDate = action.payload;
      state.currentMonthIndex = current.getMonth();
      state.currentYear = current.getFullYear();
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
      state.currentDate = today.toLocaleDateString();
      state.currentMonthIndex = today.getMonth();
      state.currentYear = today.getFullYear();
    },
    setDaySelected: (state, action: PayloadAction<string>) => {
      const current = new Date(action.payload);

      state.selectedDate = action.payload;
      state.currentDate = current.toLocaleDateString();
      state.currentMonthIndex = current.getMonth();
      state.currentYear = current.getFullYear();
    },
  },
});

const { reducer } = datesSlice;
export const { setCurrentDate, setMonthIndex, setToday, setDaySelected } =
  datesSlice.actions;
export default reducer;
