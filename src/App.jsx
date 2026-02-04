import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarPage from "./components/pages/CalendarPage.jsx";
import { Routes, Route } from "react-router-dom";
import LoginView from "./components/auth/LoginView";
import GoogleRedirect from "./components/auth/GoogleRedirect";
function App() {

  return (
    <>
      <Routes>
      {/* 기존에 있던 로그인 설정들... */}
      <Route path="/login" element={<LoginView />} />
      <Route path="/oauth/google/redirect" element={<GoogleRedirect />} />
      {/* Day 2에서 추가해야 할 부분! */}
      <Route path="/calendar" element={<CalendarPage />} /> 
    </Routes>
    </>
  )
}

export default App
