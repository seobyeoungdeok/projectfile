import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from './features/calendarSlice'; // 나중에 만들 슬라이스

export const store = configureStore({
  reducer: {
    // 여기에 우리가 만든 데이터 구역(Slice)들을 등록합니다.
    calendar: calendarReducer, 
  },
});