import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Element.css'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../actions/product'
import { getProducts } from './../../../actions/product';
export default function Element({ product, onDelete }) {
    // const handleChangeUrl = () => {
    //     history.push(`/shop/${product._id}`);
    // }
    const dispatch = useDispatch();
    const handleDelete = (product) => {
        // dispatch(deleteProduct(product._id));
        if (onDelete) {
            onDelete(product);
        }
    }
    // const handleFetchAll=()=>{
    //     dispatch(getProducts());
    // }
    const user=JSON.parse(localStorage.getItem('profile'));

    return (
        <div className="element">
            <Link to={`/shop/${product._id}`} >
                <img src={product.image[0]} className="element__image" alt="" 
                    onMouseOver={e=>{
                        e.target.src=product.image[1];
                    }}
                    onMouseOut={e=>{
                        e.target.src=product.image[0];
                    }}
                />
                <div className="element__name">
                    {product.name}
                </div>
                <div className="element__price">{product.price}vnd</div>
            </Link>
            {(user&&user.result.cate==0) &&
            <button disabled={user&&user.result.cate==1} onClick={() => handleDelete(product)} >X</button>
            }
        </div>
    )
}
