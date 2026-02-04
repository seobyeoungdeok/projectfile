import express from 'express';
import cors from 'cors';
import schedules from './data.js';
const app = express();
app.use(cors());
const PORT = 5000; // 서버가 사용할 문 번호

// 다른 파일에 있는 schedules 변수를 '가져오기' 합니다.

// 테스트 라우트: 브라우저가 '/' 주소로 들어오면 인사를 건넵니다.
app.get('/api/schedules', (req, res) => {
  res.json(schedules);
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});