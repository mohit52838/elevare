import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({ duration: 1000, once: true });

if (typeof window !== 'undefined') {
  AOS.init({ duration: 800, once: true, mirror: false });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
