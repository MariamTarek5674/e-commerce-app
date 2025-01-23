import axios from "axios";

export async function fetchUserCarts({commit}){
    try{
        let response= await axios.get('https://fakestoreapi.com/carts/user/1') // static user with id 1 because no api to get user id from token
        commit('setUserCarts',response.data)
        let length=0
        response.data.forEach(cart => {
        length+=cart?.products?.length
        });
        commit('setCartItemsLength',length)        
    }catch(error){
        console.log(error)
    }
}