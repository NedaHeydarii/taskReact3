import * as Yup from "yup"

export const productSchema = Yup.object({
    name:Yup.string().min(3).required("this Feild is required"),
    price:Yup.number().min(0).required("this feild is required"),
    discount:Yup.number().min(0).max(90)
})