import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ItemsProvider } from './context/ItemsContext'
import { ErrorProvider } from './context/ErrorContext'
import { RefProvider } from './context/RefContext'
import { ListProvider } from './context/ListContext'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import SingUp from './pages/SingUp/SingUp'
import './App.css'

function App() {
  return (
    <div>
      <ListProvider>
        <RefProvider>
          <ErrorProvider>
            <ItemsProvider>
              <ThemeProvider>
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<About />} />
                    <Route path="sign-up" element={<SingUp />} />
                  </Routes>
                </Layout>
              </ThemeProvider>
            </ItemsProvider>
          </ErrorProvider>
        </RefProvider>
      </ListProvider>
    </div>
  )
}

export default App
