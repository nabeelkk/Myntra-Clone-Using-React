import './App.css'
import {Routes,Route} from 'react-router'
import Home from './pages/Home'
import Cart from './pages/cart'
import Address from './pages/Address'
import ThankYou from './pages/ThankYou'
import Payment from './pages/Payment'




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='address' element={<Address />}/>
        <Route path='payment' element={<Payment />} />
        <Route path='thankyou' element={<ThankYou/>}/>
      </Routes>
    </>
  )
}

export default App
