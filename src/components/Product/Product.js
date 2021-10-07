import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProduct, getProducts } from '../../actions/product';
import { createCart } from '../../actions/cart'
import './Product.css'
import Element from './../Shop/Element/Element';
import {store} from 'react-notifications-component'
import { CircularProgress } from '@material-ui/core';
export default function Product() {
    const dispatch = useDispatch();
    // const [curImage, setCurImage] = useState("https://miro.medium.com/max/700/0*H3jZONKqRuAAeHnG.jpg")
    const [count, setCount] = useState(1);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getProduct(id));
        dispatch(getProducts());
        window.scrollTo(0, 0);
    }, [dispatch, id])
    const {product,IsLoading,products} = useSelector((state) => state.products);
    // const { products } = useSelector((state) => {
    //     return state.products;
    // })
    console.log(IsLoading)
    const handleImage = (e) => {
        var a = document.querySelector('.big__image img');
        a.src = e.target.src;
    }
    const addCartHandle=(e)=>{
        //dispatch add cart
        const user=JSON.parse(localStorage.getItem('profile'));
        if(user)
        {
            dispatch(createCart({
                email:user.result.email,
                id:product._id,
                name:product.name,
                price:product.price,
                image:product.image[0], 
            }));

        }
        else {
            store.addNotification({
                title: "Tài khoản chưa đăng nhâp",
                message: "Xin vui lòng đăng nhập để mua hàng!",
                type: "warning",
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
        }
    }
    return (
        <div className="product">

            <div className="product__container">
                {(IsLoading || !product) ? <CircularProgress/>:(
                        <div className="product__info">
                            <div className="product__info-left">
                                <ul className="small__image">
                                    <li className="image1" onClick={handleImage}>
                                        <img src={product.image[0]} alt=""></img>
                                    </li>
                                    <li className="image2" onClick={handleImage}>
                                        <img src={product.image[1]} alt=""></img>
                                    </li>
                                    <li className="image3" onClick={handleImage}>
                                        <img src={product.image[2]}  alt="" ></img>
                                    </li>
                                </ul>
                                <div className="big__image">
                                    <img src={product.image[0]} alt="" />
                                </div>
                            </div>
                            <div className="product__info-right">
                                <div className="product__name underline">
                                    <h2>{product.name}</h2>
                                </div>
                                <div className="product__price underline">
                                    <span>Giá: </span>
                                    {product.price}vnd
                                </div>
                                <div className="product__detail underline">
                                    <div className="product__detail-size">
                                        <span>Kích thước: </span>
                                        {product.information.size}
                                    </div>
                                    <div className="product__detail-material">
                                        <span>Chất liệu: </span>
                                        {product.information.material}
                                    </div>
                                    <div className="product__detail-place">
                                        <span>Nơi sản xuất: </span>
                                        {product.information.productPlace}
                                    </div>
                                </div>
                                <div className="product__count">
                                    {/* <button onClick={(e) => {
                                        if (count === 0) {
                                            e.target.disabled = true;
                                        }
                                        else (
                                            setCount(count - 1)
                                        )
                                    }} className="product__count-left"> {'-'} </button>
                                    <span>{count}</span>
                                    <button onClick={async (e) => {
                                        if (count + 1 === 1) {
                                            const left = document.querySelector('.product__count-left');
                                            left.disabled = false;
                                        }
                                        setCount(count + 1);

                                    }} className="product__count-right"> {'+'} </button> */}
                                </div>
                                <div className="product__addcart" onClick={addCartHandle}>
                                    Thêm vào giỏ hàng
                                </div>
                            </div>
                        </div>
                    )
                    
                }
                
            </div>
            <video className="video" src="https://cdn.shopify.com/s/files/1/1503/1122/files/SO-522_1.mp4?v=1604983909" autoPlay loop muted>
            </video>
            <div className="shop__bottom">
                <ul className="product__list">
                    {
                        products &&
                        products.map(product => (
                            <li className="product__list-element" key={product._id}>
                                <Element product={product} key={product._id}></Element>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
