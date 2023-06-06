export const addToCart = (product) => {
    console.log("Product is successfully added to cart");
    console.log(product);
    return{
        type:"ADD_TO_CART",
        product:product
    }
}