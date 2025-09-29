import { useState } from 'react'
import { ProductCard } from './components/productCard/ProductCard'
 import { QueryClientProvider ,QueryClient  } from '@tanstack/react-query'
import { ProductForm } from './components/newProduct/ProductForm'
import { Link, Outlet } from 'react-router-dom'


function App() {

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>

      <div>
      <ProductCard/>
      <Link to="newProduct">add new</Link>

     </div>

      </QueryClientProvider>
    
   
 
  )
}

export default App
