import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
               
     const[products , setProducts] = useState([])
     const[loading, setLoading] = useState(true)    

     useEffect(() => {
           
      const fetchData = async () => {
        
        try{
         const responce = await axios.get("https://dummyjson.com/products/category/mens-shirts")
          
         console.log(responce.data)
         setProducts(responce.data.products)
         setLoading(false)

        }
        catch(error){
          console.log("error while fetching Data", error)
          setLoading(true)
        }
      } 
      
      fetchData()

     },[])
       
     return(
  
        <ProductContext.Provider value={{products, loading}}>
          {children}
        </ProductContext.Provider>

  )}
