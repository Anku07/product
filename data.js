class Product {
    constructor(productId, name,price){
        this.productid = productId,
        this.name = name,
        this.productPrice = price
    }
    Totalprice(quantity){
        this.quantity = quantity
       return this.productPrice = this.productPrice*this.quantity
       
    }
}
class PersonalCareProduct extends Product{
    constructor(productId,name,price,warrantyPeriod){
        super(productId,name,price)
        this.warranty =  warrantyPeriod
    }
    Totalprice(quantity){
        this.quantity = quantity
        console.log("warrenty period of this product is " + this.warranty)
        console.log("total price of " + this.quantity + " product is :")
       return this.productPrice = this.productPrice*this.quantity
       
    }
}
export {Product, PersonalCareProduct}