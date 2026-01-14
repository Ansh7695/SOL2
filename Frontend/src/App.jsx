import React, { Suspense } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy Load Pages
const Homepage = React.lazy(() => import('./Pages/Homepage'))
const AboutUs = React.lazy(() => import('./Pages/AboutUs'))
const Marketplace = React.lazy(() => import('./Pages/Marketplace'))
const PhulwariProgram = React.lazy(() => import('./Pages/PhulwariProgram'))
const KaushalJyotiProgram = React.lazy(() => import('./Pages/KaushalJyotiProgram'))
const Impact = React.lazy(() => import('./Pages/Impact'))
const Conservation = React.lazy(() => import('./Pages/Conservation'))
const ContactUs = React.lazy(() => import('./Pages/ContactUs'))
const ShopLanding = React.lazy(() => import('./Pages/Shop/ShopLanding'))
const ProductListing = React.lazy(() => import('./Pages/Shop/ProductListing'))
const ProductDetails = React.lazy(() => import('./Pages/Shop/ProductDetails'))
const Login = React.lazy(() => import('./Pages/Login'))
const PlaceOrder = React.lazy(() => import('./Pages/PlaceOrder'))
const Orders = React.lazy(() => import('./Pages/Orders'))
const Cart = React.lazy(() => import('./Pages/Cart'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 border-4 border-[#5F9EA0] border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen flex flex-col'>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Navbar />
      <div className='flex-grow'>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/programs/phulwari' element={<PhulwariProgram />} />
            <Route path='/programs/kaushal-jyoti' element={<KaushalJyotiProgram />} />
            <Route path='/impact' element={<Impact />} />
            <Route path='/conservation' element={<Conservation />} />
            <Route path='/contact-us' element={<ContactUs />} />

            {/* Shop Routes */}
            <Route path='/shop' element={<ShopLanding />} />
            <Route path='/shop/products' element={<ProductListing />} />
            <Route path='/shop/product/:id' element={<ProductDetails />} />

            {/* User & Shop Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App