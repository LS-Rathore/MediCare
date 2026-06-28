import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from '@clerk/react'

//Import publish key
const PUBLISH_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISH_KEY) {
  throw new Error('Add your Clerk Publish Key to the .env file')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishKey={PUBLISH_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);

