import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import ManageProduct from '../pages/admin/ManageProduct'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<ManageProduct />} />
    </Routes>
  )
}
