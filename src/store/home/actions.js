import axios from "axios";

export async function fetchProducts({commit}) {
    try{
        let response= await axios.get("https://fakestoreapi.com/products")
        commit("setProducts", response.data);   
    }catch(error){
        console.log(error);
    }
     
}

export async function fetchProductDetails({},productId){    
    let response= await axios.get(`https://fakestoreapi.com/products/${productId}`)
    return response
}
