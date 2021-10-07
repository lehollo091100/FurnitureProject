import * as api from '../api';


export const getProducts = (page) => async (dispatch) => {
    try {
        dispatch({type:'START_LOADING'});
        const { data } = await api.fetchProducts(page);
        // console.log(data)
        dispatch({ type: 'FETCH_ALL', payload: { products: data } })
        dispatch({type:'END_LOADING'});
    } catch (error) {
        console.log(error.message)
    }
}
export const getProductsByCate=(query)=> async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'});
        const {data}=await api.fetchProductsByCate(query);
        // console.log(data);
        dispatch({ type: 'FETCH_BYCATE', payload: { products: data } })
        dispatch({type:'END_LOADING'});
    } catch (error) {
        console.log(error.message)
    }
}
export const getProductsBySearch=(query)=> async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'});
        const {data}=await api.fetchProductsBySearch(query);
        dispatch({ type: 'FETCH_BYSEARCH', payload: { products: data } })
        dispatch({type:'END_LOADING'});
    } catch (error) {
        console.log(error.message)
    }
}
export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({type:'START_LOADING'});
        const { data } = await api.fetchProduct(id);
        // console.log(data);
        dispatch({ type: 'FETCH_PRODUCT', payload: { product: data } })
        dispatch({type:'END_LOADING'});
    } catch (error) {
        console.log(error.message)
    }
}
export const createProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch({ type: 'CREATE', payload: { products: data } })
    } catch (error) {
        console.log(error.message)
    }
}
export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.deleteProduct(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error.message)
    }
}