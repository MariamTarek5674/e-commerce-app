import axios from "axios";
import { date } from "yup";

export async function fetchUserCarts({commit}){
    try{
        commit('setFetchCartLoading',true)
        let response= await axios.get('https://fakestoreapi.com/carts/user/1') // static user with id 1 because no api to get user id from token
        commit('setUserCarts',[response.data[0]]) //set with only the first cart sent (as if it is the active cart)
        let length=0
        response.data.forEach(cart => {
        length+=cart?.products?.length
        });
        commit('setCartItemsLength',length)     
        commit('setFetchCartLoading',false)   
    }catch(error){
        console.log(error)
    }
}

export async function clearCart({commit},id){
    try{
        let response= await axios.delete(`https://fakestoreapi.com/carts/${id}`)        
        if(response.status==200)
            commit('setUserCarts',[])
    }catch(error){
        console.log(error)
    }
}

export async function updateProductQuantity({},{cartId,productId,quantity}){
    try{
        await axios.put(`https://fakestoreapi.com/carts/${cartId}`,{
            body:
                {
                    userId:1,
                    date:Date.now(),
                    products:[{productId,quantity}]
                }
            })
            .then(response=>console.log(response))
    }catch(error){
        console.log(error)
    }
}