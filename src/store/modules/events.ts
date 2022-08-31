import { createSlice } from '@reduxjs/toolkit';

const initialState: {} = {};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
});

const { reducer } = eventSlice;
export default reducer;
