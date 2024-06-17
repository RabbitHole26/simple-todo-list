// import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import './App.css'

function App() {
  // const [isTouchDevice, setIsTouchDevice] = useState(false)

  // useEffect(() => {
  //   const detectTouch = () => {
  //     return 'ontouchstart' in window || navigator.maxTouchPoints
  //   }
  //   setIsTouchDevice(detectTouch())
  // }, [])

  return (
    // <div className={isTouchDevice ? 'disableTouchPoints' : ''}>
    <div>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App
