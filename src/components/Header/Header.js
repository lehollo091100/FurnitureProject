import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from './logo1.png'
import  {Avatar, Button} from "@material-ui/core"
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDispatch,useSelector} from 'react-redux'
import {getCart,deleteCart,createCart,removeCart} from '../../actions/cart'
import ReactNotification, {store} from 'react-notifications-component'

export default function Header() {
    const location=useLocation();
    const dispatch=useDispatch();
    const history=useHistory();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const [userCate,setUserCate]=useState(1);
    var products=null;
    const [products1,setProducts1]=useState(null);
    const a=JSON.parse(localStorage.getItem('profile'));
    useEffect(()=>{
        setUser(a);

        if(a)
        {
            dispatch(getCart(a.result.email));
        } 
        else{
            setProducts1(null);
        }
    },[location])
    products=useSelector((state)=>{
        return state.cart.products;
    })
    useEffect(()=>{
        if(a)
        {
            setProducts1(products);
        }
    },[products])
    const handleDeleteCart=(productid)=>{
        const email=(a.result.email);
        dispatch(deleteCart({id:productid,email}));
        var newProducts=null;
        
        newProducts=products1.filter((product)=>{
            return product.id!=productid;
        })
        setProducts1(newProducts);
    }
    const addCartHandle=(product)=>{
        //dispatch add cart
        let user=a;
            dispatch(createCart({
                email:user.result.email,
                id:product.id,
                name:product.name,
                price:product.price,
                image:product.image, 
            }));
    }
    const removeCartHandle=(product)=>{
        //dispatch add cart
        let user=a;
        dispatch(removeCart({email:user.result.email,id:product.id}));
    }
    
    const logout=()=>{
        setProducts1(null);
        dispatch({type:'LOGOUT'})
        history.push('/auth')
        setUser(null);
    }
    function onTop(){
        window.scrollTo(0,0);
    }

    const handleActive=(e)=>{
        if(localStorage.getItem('profile'))
        {
            let cart=(document.querySelector('.header__cart'));
            cart.classList.toggle('active')
        }
        else{
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
    const showNotification=(type)=>{
        switch (type) {
                case 'addCartSuccess':
                    {
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
                            onScreen: true
                            },
                            showIcon:true,
                            
                        });
                        break;
                    }
                case 'addCartFailed':
                    {
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
                        break;
                    }    
                case 'deleteCart':
                    {
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
                              showIcon:true,
                              onScreen: true                                
                            },
                              
                         });
                        break;
                    }
            default:
                break;
        }
    }
    const menuClick=()=>{
        document.querySelector('.bottom__list-wrapper').classList.toggle('menu')
        document.querySelector('.fa-bars').classList.toggle('hidden')
    }
    
    return (
        <div className="header" >
            <div className="scrollup__button" >
                <FontAwesomeIcon icon="chevron-circle-up"></FontAwesomeIcon>
            </div>
            <div className="header__wrap">
                <div className="header__container">
                    <div className="header__bottom">
                        <ul className="bottom__list">
                            <Link to="/" onClick={onTop}>
                                <img src={Logo} alt="" />
                            </Link>
                            <FontAwesomeIcon icon="bars" className="bars" onClick={menuClick}></FontAwesomeIcon>
                            <div className="bottom__list-wrapper">
                                <div className="bottom__list-item">
                                    <a href="/" onClick={onTop}>Trang chủ</a>
                                </div>
                                <div className="bottom__list-item">
                                    <Link to="/shop" onClick={onTop}>Cửa hàng</Link>
                                </div>
                                <div className="bottom__list-item">
                                    <Link to="/about" onClick={onTop}>Giới thiệu</Link>
                                </div>
                                <div className="close" onClick={menuClick}>                                </div>
                            </div>
                        </ul>
                        <div className="header__right">
                            <div className="header__right-icon">
                                <FontAwesomeIcon className="icon" icon="shopping-cart" onClick={handleActive}></FontAwesomeIcon>
                                <div className="icon__amount">{products1?products1.length:0}</div>
                            </div>
                            {user ? (
                                <div className="profile">
                                        <Avatar src={user.result.imageUrl} alt={user.result.name} className="profile__image">{user.result.name.charAt(0)}</Avatar>
                                        {/* <Typography variant="h6" className="profile__username">{user.result.name}</Typography> */}
                                        <Button variant="contained" className="profile__logout" color="secondary" onClick={logout}>Logout</Button>
                                    </div>
                                ):
                                (
                                    <Link className="header__right-signin" to="/auth" onClick={onTop}>
                                        <FontAwesomeIcon className="icon" icon="user"></FontAwesomeIcon>
                                        <span>Sign in</span>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__cart ">
                <div className="header__cart-wrap">
                    <div className="cart__title" >
                        <h2>SHOPPING CART</h2>
                        <div className="cart__close" onClick={handleActive}></div>
                    </div>
                    <ul className="cart__list">
                        {
                            products1 &&  products1.map(product=>(
                                <li className="cart__list-item" key={product.id} id={product.id}>
                                    <div className="cart__item-image">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="cart__item-info">
                                        <div className="item__name">
                                            <h4>{product.name}</h4>
                                        </div>
                                        <span className="item__price">
                                            ${product.price}
                                        </span>
                                        <div className="item__amount">
                                            <button className="item__amount-minus" disabled={product.amount==1} onClick={()=>removeCartHandle(product)}>
                                                -
                                            </button>
                                            {product.amount}
                                            <button className="item__amount-plus" onClick={()=>addCartHandle(product)}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart__item-delete" >
                                        <button className="product__delete" onClick={()=>handleDeleteCart(product.id)}>
                                            <FontAwesomeIcon icon="trash-alt" ></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>  
        </div>
    )
}
