import './CSS/all.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import MainPage from './Components/MainPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/HowToUse" element={<MainPage />}></Route>
        <Route path="/Charge" element={<MainPage />}></Route>
        <Route path="/PointNews" element={<MainPage />}></Route>
        <Route path="/LatestNews" element={<MainPage />}></Route>
        <Route path="/Activity" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
