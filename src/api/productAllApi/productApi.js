import React from 'react'
import {api} from "../interceptor"


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