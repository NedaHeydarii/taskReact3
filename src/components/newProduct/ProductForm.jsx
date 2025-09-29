import { ErrorMessage, Field, Formik } from "formik"
import React, { Fragment} from 'react'
import { Form } from "formik"
import { postProduct } from '../../api/productAllApi/productApi'
import { productSchema } from '../../validation/productValidation'
import { useMutation } from '@tanstack/react-query'

const ProductForm = () => {

const mutation = useMutation({
    mutationFn:postProduct,
    onSuccess:()=>{alert("new product is added...")},
    onError:()=>{alert("there is a problem...")}
        
})


  return (
  
    <Fragment>
    
        <h1>Add New Product:</h1>
        <Formik initialValues={{name:"" , image:"" , price:"" , discount:""}}  validationSchema={productSchema}  
        onSubmit={(values) =>{mutation.mutate(values)}}>
        
               <Form className="border-2 flex gap-3 p-4">
             
              <div>  <Field className=" p-2.5 border-2 border-blue-800"  name="name" type="text" placeholder="productName..." />
              <ErrorMessage className="text-red-500" name="name" component="p"/>
              </div>
              
                <Field className="border-2 border-blue-800"  name="image" type="text" placeholder="image URl..."/>
              
               <div>
                 <Field className="p-2.5 border-2 border-blue-800" name="price" type="number" placeholder="price..."/>
                <ErrorMessage  className="text-red-500" name="price" component="p"/>   
               </div>
             
                <div>
                    <Field  className=" p-2.5 border-2 border-blue-800"name="discount" type="number" placeholder="discount..."/>
                    <ErrorMessage className="text-red-500" name="discount" component="p"/>
                </div>
            
              <button type='submit' disabled={mutation.isLoading}> add Product</button>
            </Form>        
        
        </Formik>
      
    </Fragment>


   
  
  )
}

export {ProductForm} 