import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home/HomePage'
import Cart from './pages/Cart'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import ProductDetail from './pages/Detail/ProductDetail'
import ProfilePage from './pages/ProfilePage'
import AdminPanel from './pages/Admin/AdminPanel'
import CategoryPage from './pages/Admin/CategoryPage'
import ProductEditPage from './pages/Admin/ProductEditPage'

function RoutingPage() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/product-detail/:productId' element={<ProductDetail />}/>
          <Route path='/profile' element={<ProfilePage />}/>
          <Route path='/admin-panel' element={<AdminPanel />}/>
          <Route path='/category' element={<CategoryPage />}/>
          <Route path='/product-edit' element={<ProductEditPage />}/>
              
        </Routes>
    </BrowserRouter>
  )
}

export default RoutingPage