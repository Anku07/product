import { Product,PersonalCareProduct } from "./data.js";
const product = new PersonalCareProduct(123456789,"dot & key cream", 233, "2 year" )
const totalProduct = product.Totalprice(90)
console.log(totalProduct)