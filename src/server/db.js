import mysql from 'mysql2/promise'; // require 대신 import 사용
// DB 접속 정보 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678', // 실제 MySQL 비밀번호로 수정하세요
  database: 'project_db',   // 미리 만들어둔 DB 이름으로 수정하세요
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 연결 테스트 (서버 실행 시 콘솔에 출력됨)
pool.getConnection()
  .then(conn => {
    console.log('✅ DB 연결 성공! (MySQL)');
    conn.release();
  })
  .catch(err => {
    console.error('❌ DB 연결 실패:', err.message);
  });

export default pool; // module.exports 대신 export default 사용