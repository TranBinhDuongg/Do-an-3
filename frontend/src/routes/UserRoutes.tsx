import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/user/Home'
import Product from '../pages/user/Product'
import Login from '../pages/user/Login'

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  )
}
