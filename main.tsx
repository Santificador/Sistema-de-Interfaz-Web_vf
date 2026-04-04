import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import './styles/globals.css'

// ============================================
// QUIERO MI SEGURO - Aplicación Profesional v2.0
// ============================================
// Frontend: React 18 + TypeScript + Tailwind
// Backend: Express.js + MongoDB
// ============================================

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
