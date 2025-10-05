import { useState } from 'react'
import { ProductCard } from './components/productCard/ProductCard.jsx'
 import { QueryClientProvider ,QueryClient  } from '@tanstack/react-query'
import { ProductForm } from './components/newProduct/ProductForm.jsx'
import { Link, Outlet } from 'react-router-dom'


function App() {

 

  return (
     

      <div>
      <ProductCard/>

   <Link className=' text-pink-400 rounded-2xl  p-4 ' to="/newProduct"><button>add New</button></Link>
     
   
      
       </div>
  
    
   
 
  )
}

export default App
