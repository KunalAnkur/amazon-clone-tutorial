const initialState = {
    products: [],
    numberOfProduct: 0,
}

export default function cartReducer(state = initialState, action){
    console.log(state,action);
    if(action.type === "add_to_card"){
        return {
            ...state,
            products:[...state.products,action.payload],
            numberOfProduct: ++state.numberOfProduct
        }
    }else if (action.type === "remove_product"){
        const newProduct = state.products.filter(product => product.id !== action.payload);
        return {
          ...state,
          products: [...newProduct],
          numberOfProduct: --state.numberOfProduct,
        };
    } 
    return state;
}