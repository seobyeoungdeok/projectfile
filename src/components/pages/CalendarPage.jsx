import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { addEvent, fetchSchedules } from "../../features/calendarSlice";
import { saveOrder } from "../../firebaseConfig";


// 1. 함수 선언은 한 번만 합니다!
export default function CalendarPage() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.calendar.events);

  // 모달 및 입력값 상태 관리
  const [show, setShow] = useState(false);
  const [time, setTime] = useState("12:00"); // 기본값 설정
  const [selectedDate, setSelectedDate] = useState("");
  const [title, setTitle] = useState("");
  //const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  //const [selectedItem, setSelectedItem] = useState(null);
  //const [newEventTitle, setNewEventTitle] = useState("");

  // 2. 서버에서 데이터 가져오기 (가장 중요!)
  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  // 날짜 클릭 시 일정 등록 창 열기
  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // 일정 저장 (백엔드 연동 전 리덕스에만 저장)
  const handleSaveEvent = () => {
    if (title) {
      dispatch(addEvent({ id: Date.now(), title, start: selectedDate, allDay: true }));
      setTitle("");
      handleClose();
    }
  };

  const handleTestSave = () => {
  saveOrder({
    productName: "테스트 상품",
    quantity: 1,
    price: 10000
  });
};

  return (
    <div style={{ padding: "20px" }}>
      <button 
      onClick={handleTestSave} 
      style={{ 
        marginBottom: "10px", 
        padding: "10px", 
        backgroundColor: "#007bff", 
        color: "white", 
        border: "none", 
        borderRadius: "5px", 
        cursor: "pointer" 
      }}
    >
      DB 저장 테스트
    </button>
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events} // 실제 리덕스 상태와 연결
        dateClick={handleDateClick}
      />

      {/* 일정 등록 모달 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDate} 일정 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="일정 내용을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Form.Group className="mb-3" style={{ marginTop: "15px" }}>
          <Form.Label>시간 선택</Form.Label>
          <Form.Control 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
  />
</Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>닫기</Button>
          <Button variant="primary" onClick={handleSaveEvent}>저장</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}