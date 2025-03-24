import './App.css'
import StorePage from './Pages/StorePage'
import Navbar from './Components/Navbar'
import { ProductProvider } from './Components/ProductContext/ProductContext'


function App() {

  return (
    <>
    <ProductProvider>
    <Navbar/>
     <StorePage/>
     </ProductProvider>
    </>
  )
}

export default App
