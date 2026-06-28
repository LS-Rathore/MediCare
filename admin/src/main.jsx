import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AdminAuthProvider } from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
    <AdminAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AdminAuthProvider>
)