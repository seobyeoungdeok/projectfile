import express from 'express';
import db from './db.js';

console.log("서버가 시작되었습니다. DB 연결을 시도합니다...");
console.log("연결 상태 객체:", db); // 이 줄을 추가하면 노란 줄이 사라집니다.
const app = express();
app.use(express.json()); // 데이터를 주고받을 때 JSON 형식을 사용하겠다는 설정

let schedules = [
    { id: 1, content: '공부하기' },
    { id: 2, content: '운동하기' }
];

// 1. 일정 목록 전체 보기 (GET)
app.get('/api/schedules', (req, res) => {
  const formattedSchedules = schedules.map(s => ({
    id: s.id,
    title: s.content, // content를 title로 전달
    start: new Date().toISOString().split('T')[0] // 오늘 날짜 예시
  }));
  res.json(formattedSchedules);
});

// 2. 새로운 일정 등록하기 (POST)
app.post('/schedules', (req, res) => {
    const newSchedule = {
        id: schedules.length + 1,
        content: req.body.content
    };
    schedules.push(newSchedule);
    res.status(201).send('일정이 등록되었습니다!');
});

// 3. 특정 일정 내용 바꾸기 (PUT)
app.put('/schedules/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = schedules.find(s => s.id === id);
    if (item) {
        item.content = req.body.content;
        res.send('일정이 수정되었습니다!');
    } else {
        res.status(404).send('일정을 찾을 수 없어요.');
    }
});

// 4. 완료된 일정 삭제하기 (DELETE)
app.delete('/schedules/:id', (req, res) => {
    const id = parseInt(req.params.id);
    schedules = schedules.filter(s => s.id !== id);
    res.send('일정이 삭제되었습니다!');
});

app.listen(3000, () => console.log('서버가 3000번 포트에서 시작되었습니다!'));