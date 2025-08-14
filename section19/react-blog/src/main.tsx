import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css';
import Routes from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Routes/>
  </StrictMode>,
)
