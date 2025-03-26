import './App.css'
import StorePage from './Pages/StorePage'
import Cart from './Pages/CartPage'
import Navbar from './Components/Navbar'
import ProductPage from './Pages/ProductPage'
import { ProductProvider } from './Components/ProductContext/ProductContext'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
    <ProductProvider>  
    <Navbar/>
    <Routes>
      <Route path='/' element={<StorePage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product/id:' element={<ProductPage/>}/>
    </Routes>
     </ProductProvider>
    </Router>
  )
}

export default App
