// import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ItemsProvider } from './context/ItemsContext'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import './App.css'

function App() {
  return (
    <div>
      <ItemsProvider>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </ItemsProvider>
    </div>
  )
}

export default App
