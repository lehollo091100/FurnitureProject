export default (state = { products: [] }, action) => {
    switch (action.type) {
        case 'CREATE_CART':
            {
                return {
                    ...state,
                    products:action.payload.products,
                };
            }
        case 'GET_CART':
            {
                return {
                    ...state,
                    products:action.payload.products,
                };
            }
        case 'DELETE_CART':
            {
                console.log('reducer:',action.payload.products);
                return{
                    ...state,
                    products:action.payload.products,
                }
            }
        case 'REMOVE_CART':
            {
                return{
                    ...state,
                    products:action.payload.products,
                }
            }
        default:
            return state;
    }
}