import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
)
export default Rotas
