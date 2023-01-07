export const sendProductToCart = (data) => (dispatch) => {
    dispatch({type:"add_to_card", payload:data })
}

export const removeProductFromCart = (id) => (dispatch) => {
  dispatch({ type: "remove_product", payload: id });
};