import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'

export default function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/cadastro' element={<Cadastro/>} />

       </Routes>
    </ BrowserRouter>
  )
}

