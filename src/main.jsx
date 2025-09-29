import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductForm } from './components/newProduct/ProductForm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UpdateProduct } from './components/updateProduct/UpdateProduct.jsx'

  const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
   
  },
  {
   path: '/newProduct',
   element: <ProductForm />
   },
   {
    path:"/editProduct/:id",
    element:<UpdateProduct/>
   }
   

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </StrictMode>,
)
