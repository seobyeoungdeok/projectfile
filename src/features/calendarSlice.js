import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// 1. 초기값 설정 (처음 앱을 켰을 때 상태)
const initialState = {
  events: [], // 일정들이 담길 배열
  loading: false, // 로딩 상태 추가
  error: null     // 에러 메시지 상태 추가
};

// 여기에 추가!
export const fetchSchedules = createAsyncThunk(
  'calendar/fetchSchedules',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/api/schedules');
      return response.data; // 성공 시 데이터 반환 (12번째 줄)
    } catch (error) {
      // 1. 사용자에게 즉각적인 알림 (Day 5 목표)
      if (error.response) {
        alert(`오류 발생: ${error.response.status} - 다시 시도해주세요.`);
      } else if (error.request) {
        alert("서버 연결에 실패했습니다. 서버가 켜져 있는지 확인해주세요.");
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }

      // 2. Redux 상태에도 에러가 발생했음을 알림
      return rejectWithValue(error.message);
    }
  }
);
// 2. 슬라이스 생성
export const calendarSlice = createSlice({
  name: 'calendar', // 이 슬라이스의 이름
  initialState,     // 위에서 만든 초기값
  reducers: {
    // 일정 추가하기 규칙
    addEvent: (state, action) => {
      // 리덕스 툴킷은 state를 직접 수정하는 것처럼 써도 안전하게 변경해줍니다!
      state.events.push(action.payload);
    },
    // 일정 삭제하기 규칙
    deleteEvent: (state, action) => {
      // action.payload로 전달된 ID와 다른 것들만 남겨서 삭제 효과를 냅니다.
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    // 일정 수정하기 규칙 (필요시 사용)
    updateEvent: (state, action) => {
      const index = state.events.findIndex(ev => ev.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
  }, 

  extraReducers: (builder) => {
    builder
      // 1. 로딩 시작 (Day 5: 로딩 처리)
    .addCase(fetchSchedules.pending, (state) => {
      state.loading = true; // 데이터를 가져오는 중임을 표시
    })
    // 2. 성공 시 (기존 코드)
    .addCase(fetchSchedules.fulfilled, (state, action) => {
      state.loading = false; // 로딩 완료
      state.events = action.payload; // 서버에서 가져온 데이터 저장
    })
    // 3. 실패 시 (Day 5: 에러 처리)
    .addCase(fetchSchedules.rejected, (state, action) => {
      state.loading = false; // 로딩 종료
      state.error = action.payload; // 에러 메시지 저장
      });
  },

});

// 3. 액션 생성함수 내보내기 (컴포넌트에서 "추가해줘!"라고 할 때 사용)
export const { addEvent, deleteEvent, updateEvent } = calendarSlice.actions;

// 4. 리듀서 내보내기 (1단계에서 만든 Store에 등록할 때 사용)
export default calendarSlice.reducer;