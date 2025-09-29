import React, { useEffect, useState } from 'react'
// import productJson from "../../json/ProductList.json"
import { useQuery} from "@tanstack/react-query"
import { getProduct } from '../../api/productAllApi/productApi'
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

  return (
    <div>
        <h1>Product Lists:</h1>
    <div className='flex gap-4' >
        {data?.map((Product)=>(
            <div key={Product.id} className='border-2 border-b-fuchsia-800 rounded-2xl p-3'>
                <img src={Product.imageUrl}/>
                <h3>{Product.name}</h3>
                <p className='text-red-500'>{Product.discount}%</p>
                <p>{Product.isNew}</p>
                <span className='pr-3'>{Product.price}$</span>
                
                <button type='submit' ></button>
            </div>
      ))}
    </div>

     
  
    </div>
  )
}

export {ProductCard} 