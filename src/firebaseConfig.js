import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// 1. 기존 설정값 (유지)
const firebaseConfig = {
  apiKey: "본인의_API_KEY",
  authDomain: "본인의_PROJECT_ID.firebaseapp.com",
  projectId: "knamecard97",
  storageBucket: "본인의_PROJECT_ID.appspot.com",
  messagingSenderId: "본인의_SENDER_ID",
  appId: "본인의_APP_ID"
};

// 2. 초기화 (한 번만 선언)
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 3. 유지보수를 위한 주문 저장 함수 (추가)
/**
 * 주문 데이터를 Firestore에 저장하는 함수
 * @param {Object} orderData - 상품명, 수량, 가격 등의 정보
 */
export async function saveOrder(orderData) {
  try {
    await addDoc(collection(db, "orders"), {
      title: "여자친구와 데이트",       // 일정 제목
      date: "2026-01-30",         // 년-월-일 (예: 2026-01-29)
      time: "9:00-18:00",
      ...orderData,
      orderDate: serverTimestamp() 
    });
    console.log("✅ 주문 데이터가 성공적으로 저장되었습니다.");
  } catch (error) {
    console.error("❌ 주문 저장 중 오류 발생:", error);
  }
}