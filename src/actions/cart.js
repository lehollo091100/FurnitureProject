import * as api from '../api';
import {store} from 'react-notifications-component'
export const createCart = (cart) => async (dispatch) => {
    try {
        const {data} =await api.createCart(cart);
        store.addNotification({
            title: "Success",
            message: "Sản phẩm đã được thêm vào giỏ hàng",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true,
              showIcon:true,
            },
            
          });
        dispatch({type:'CREATE_CART',payload:data});
    } catch (error) {
        console.log(error.message)
    }
}
export const getCart=(email)=>async(dispatch)=>{
    try {
        const {data}=await api.getCart(email);
        dispatch({
            type:'GET_CART',
            payload:data,
        })
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteCart=(id)=>async(dispatch)=>{
    try {

        const {data}=await api.deleteCart(id);
        store.addNotification({
            title: "Success",
            message: "Sản phẩm đã được xoá khỏi giỏ hàng",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true
            },
            showIcon:true,
            
          });
        dispatch({
            type:'DELETE_CART',
            payload:data,
        })
    } catch (error) {
        console.log(error.message);
    }
}
export const removeCart=(id)=>async(dispatch)=>{
    try {
        
        const {data}=await api.removeCart(id);
        store.addNotification({
            title: "Success",
            message: "Sản phẩm đã được xoá  khỏi giỏ hàng",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 4000,
              onScreen: true,
              showIcon:true,
            },
            
          });
        dispatch({
            type:'REMOVE_CART',
            payload:data,
        })
    } catch (error) {
        console.log(error.message);
    }
}