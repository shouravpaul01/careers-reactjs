import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster
      position="top-center"
    />
 </>
)
