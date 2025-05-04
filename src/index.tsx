import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n'; // 导入i18n配置

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
); 