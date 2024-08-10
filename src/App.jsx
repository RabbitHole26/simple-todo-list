import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ItemsProvider } from './context/ItemsContext'
import { ErrorProvider } from './context/ErrorContext'
import { RefProvider } from './context/RefContext'
import { ListProvider } from './context/ListContext'
import { QuoteProvider } from './context/QuoteContext'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import Layout from './components/Layout/Layout'
import './App.css'


function App() {
  return (
    <div>
      <QuoteProvider>
        <ListProvider>
          <RefProvider>
            <ErrorProvider>
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
            </ErrorProvider>
          </RefProvider>
        </ListProvider>
      </QuoteProvider>
    </div>
  )
}

export default App
