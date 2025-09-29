import React, { useEffect, useState } from 'react'
// import productJson from "../../json/ProductList.json"
import { useMutation, useQuery} from "@tanstack/react-query"
import { deleteProduct, getProduct } from '../../api/productAllApi/productApi'
import { Link } from 'react-router-dom'
import { ProductForm } from '../newProduct/ProductForm'

const ProductCard = () => {
    // const [isAdded , setIsAdded]= useState(false)
    // const onAdded = (id) =>{
    //     const ProductAdd  = !!isAdded[id]
    //     if(ProductAdd){
    //         setIsAdded(prev =>({
    //             ...prev, [id]:false
    //         }))  
    //     }
    //     else{
    //         setIsAdded(prev=>({...prev , [id]:true}))
    //         alert("it is added...")
    //     }
    // }
    const{data , isLoading , isError} = useQuery({queryKey:["product"], queryFn:getProduct})
    if(isLoading){<div>is Loading....</div>}
    if(isError){alert("error for get product api")}

    const mutation =useMutation({
      mutationFn:deleteProduct,
      onSuccess:()=>{alert("product deleted..")},
      onError:()=>{alert("there is a problem...")}
        
    })

    

  return (
    <div>
        <h1>Product Lists:</h1>
    <div className='flex gap-4' >
        {data?.map((Product)=>(
            <div key={Product.id} className='border-2 border-b-fuchsia-800 rounded-2xl p-3'>
                <img src={Product.imageUrl}/>
                <h3>{Product.name}</h3>
                <p className='text-red-500'>{Product.discount}%</p>
                <p>{Product.isNew ?"new" : "old"}</p>
                <p className='pr-3'>{Product.price}$</p>
                
                <button type='submit' onClick={()=> mutation.mutate(Product.id)} >delete</button>
               <Link   to={`/editProduct/${Product.id}`} > <button className='ml-2' >Edite</button></Link>
            </div>
      ))}
    </div>

     
  
    </div>
  )
}

export {ProductCard} 