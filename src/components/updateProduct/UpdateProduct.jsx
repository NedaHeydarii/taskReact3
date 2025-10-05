import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Form } from "formik"
import { ErrorMessage, Field, Formik } from "formik"
import React, { Fragment} from 'react'
import {  useParams } from "react-router-dom"
import { getProductbyId, updateProduct } from "../../api/productAllApi/productApi.js"
import { productSchema } from "../../validation/productValidation.js"

const UpdateProduct = () => {
    const {id} = useParams()
    const queryClient = useQueryClient()
   
      
    const{data , isLoading , isError}=useQuery({queryKey:["Product" , id] , queryFn:()=>getProductbyId(id),})
   console.log(data)
     const mutation = useMutation({
        mutationFn:updateProduct,
        onSuccess:(data)=>{alert("product updated..."), queryClient.setQueryData(['product',id],data),queryClient.invalidateQueries(['product']),data},
        onError:()=>{alert("there is a problem...")},    
     })
     if(isLoading){
       return <div >Loading....</div>
     }

  return (
    <div>
            <Fragment>
                  <h1>Edittt your Product:</h1>
                        <Formik initialValues={{
                            name:data?.name,
                             image:data?.imageUrl , 
                             price:data?.price , 
                             discount:data?.discount}}  validationSchema={productSchema}  
                        onSubmit={(values) =>{mutation.mutate({id,name:values.name,  image:values.imageUrl,price:values.price,discount:values.discount} ) }}>
                        
                               <Form className="border-2 flex gap-3 p-4">
                             
                              <div>  <Field className=" p-2.5 border-2 border-blue-800"  name="name" type="text" placeholder="productName..." />
                              <ErrorMessage className="text-red-500" name="name" component="p"/>
                              </div>
                              
                                <Field className=" p-2 border-2 border-blue-800"  name="image" type="text" placeholder="image URl..."/>
                              
                               <div>
                                 <Field className="p-2.5 border-2 border-blue-800" name="price" type="number" placeholder="price..."/>
                                <ErrorMessage  className="text-red-500" name="price" component="p"/>   
                               </div>
                             
                                <div>
                                    <Field  className=" p-2.5 border-2 border-blue-800"name="discount" type="number" placeholder="discount..."/>
                                    <ErrorMessage className="text-red-500" name="discount" component="p"/>
                                </div>
                            
                              <button type='submit' > edit your product</button>
                            </Form>        
                        
                        </Formik>
                      
                  
            </Fragment>
    </div>
  )
}

export {UpdateProduct} 