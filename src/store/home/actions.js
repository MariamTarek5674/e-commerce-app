import axios from "axios";

export async function fetchProducts({commit}) {
    try{
        let response= await axios.get("https://fakestoreapi.com/products")
        console.log(response.data);
        commit("setProducts", response.data);   
    }catch(error){
        console.log(error);
    }
     
}
