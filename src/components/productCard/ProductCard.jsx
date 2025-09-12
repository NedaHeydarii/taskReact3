import React, { useEffect, useState } from 'react'
import productJson from "../../json/ProductList.json"

const ProductCard = () => {
    const [isAdded , setIsAdded]= useState(false)

    const onAdded = (id ) =>{
        const ProductAdd  = !!isAdded[id]
        if(ProductAdd){
            setIsAdded(prev =>({
                ...prev, [id]:false
            }))
        }
        else{
            setIsAdded(prev=>({...prev , [id]:true}))
            alert("it is added...")
        }
    }

    useEffect(()=>{
        console.log("render for first time")
    },[])
  return (
    <>
        <h1>Product Lists:</h1>
    <div style={{display:"flex" ,gap:"30px" }} >
        {productJson.productList.map((Product)=>(
            <div key={Product.id} style={{border:"3px solid purple",borderRadius:"4px" , padding:"14px"}}>
                <img src={Product.img}/>
                <h3>{Product.name}</h3>
                <p>{Product.explain}</p>
                <span style={{paddingRight:"10px"}}>{Product.price}</span>
                <button type='submit' onClick={()=>onAdded(Product.id)}>{isAdded[Product.id] ?"it is added"  : "add to basket"}</button>
                    </div>
      ))}
    </div>
    </>
  )
}

export {ProductCard} 