import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MainProvider from './providers/Main.tsx'

createRoot(document.getElementById('root')!).render(
  <MainProvider>
    <App />
  </MainProvider>
)
