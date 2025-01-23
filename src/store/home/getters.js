export function products(state){
    return state.products;
}
export const getProductById = (state) => (id) => {
    return state.products.find(product => product.id === id);
};