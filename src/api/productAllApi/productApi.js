import React from 'react'
import {api} from "../interceptor.js"

export const getProduct = async () =>{
    try{
        const res = await api.get("/products")
        return res.data
    }
    catch(error){
        throw new Error("errorr for getProduct")
    }
}

export const postProduct = async (data) =>{
    try{
        const res = await api.post("/products" , data)
        return res.data
    }
    catch(error){
        throw new Error("error for post product")
    }
}

export const deleteProduct = async (id)=>{
    try{
        const res = await api.delete(`/products/${id}`)
        return res.data
    }
    catch(error){
        throw new Error("error for delete Prodct")
    }
}
export const getProductbyId = async (id)=>{
  try{
        const res = await api.get(`/products/${id}`)
        return res.data
    }
    catch(error){
        throw new Error("errorr for getProduct by Id")
    }
}
export const updateProduct = async ({id , ...data})=>{
      console.log(data)
    try{
        const res = await api.put(`/products/${id}` ,data)
        return res.data
       
    }
    catch(error){
        throw new Error("error in updatingg...")
      
    }
     
}
 

