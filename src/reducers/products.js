export default (state = { products: [],IsLoading:true,product:null }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {...state,IsLoading:true};
        case 'END_LOADING':
            return {...state,IsLoading:false};
        case 'FETCH_ALL':
            // console.log(action.payload.products)
            {
                return { ...state, 
                        products: action.payload.products.data,
                        currentPage:action.payload.products.currentPage,
                        numberOfPages:action.payload.products.numberOfPages,   
                    };
            }
        case 'FETCH_BYCATE':
            {
                return {...state,
                    products:action.payload.products.data,
                    currentPage:action.payload.products.currentPage,
                    numberOfPages:action.payload.products.numberOfPages,                    
                };
            }
        case 'FETCH_BYSEARCH':
            {
                return {...state,products:action.payload.products};
            }
        case 'CREATE':
            return { ...state, products: action.payload.products };
        case 'FETCH_PRODUCT':
            // console.log(action.payload.product)
            return { ...state, product: action.payload.product };
        case 'DELETE':
            const { products } = state;
            products.filter((product) => {
                return product._id !== action.payload;
            })
            return { ...state, products: products }
        default:
            return state;
    }
}