import { MainPage } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRotes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />}  path="/"/>
      </Routes>
    </BrowserRouter>
  )
}
