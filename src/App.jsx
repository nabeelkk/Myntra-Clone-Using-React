import './App.css'
import {Routes,Route} from 'react-router'
import Home from './pages/Home'
import Cart from './pages/cart'
import Address from './pages/Address'
import ThankYou from './pages/ThankYou'
import Payment from './pages/Payment'
import Sample from './pages/sample'
import Mens from './pages/Mens'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='address' element={<Address />}/>
        <Route path='payment' element={<Payment />} />
        <Route path='thankyou' element={<ThankYou/>}/>
        <Route path='test' element = {<Sample/>}/>
        <Route path='mens' element = {<Mens />}/>
      </Routes>
    </>
  )
}

export default App
