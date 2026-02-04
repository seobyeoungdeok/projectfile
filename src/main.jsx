import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// 1. Redux 관련 도구 불러오기
import { Provider } from 'react-redux';
import { store } from './store'; // 방금 만든 store.js 파일


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
)

