import { MainPage } from 'pages'
import {  Route, Routes } from 'react-router-dom'
import { ROUTES } from 'shared/config'
import { LoginPage } from 'pages/login'

export function AppRouter() {
  return (
      <Routes>
        <Route element={<MainPage />}  path={ROUTES.HOME}/>
        <Route element={<LoginPage/> } path={ROUTES.LOGIN}/>
      </Routes>
  )
}
