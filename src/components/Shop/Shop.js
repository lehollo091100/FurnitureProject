import React from 'react'
import Home from '../Home/Home'
import './Shop.css'
// import FileBase from 'react-file-base64'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import Element from './Element/Element';
import { createProduct, deleteProduct,getProductsByCate } from '../../actions/product'
import { getProducts } from '../../actions/product';
import {useHistory,useLocation} from 'react-router-dom'
import { getProductsBySearch } from './../../actions/product';
import Pagi from './Pagination/Pagination'
import { Paper,CircularProgress } from '@material-ui/core'
function useQuery(){
    return new URLSearchParams(useLocation().search);
}
export default function Shop() {
    const query=useQuery();
    const history=useHistory();
    const page=query.get('page')||1;
    const result=JSON.parse(localStorage.getItem('profile'));
    const cateQuery=query.get('category');
    // console.log(cateQuery);
    const searchQuery=query.get('searchQuery');
    const { products,IsLoading } = useSelector((state) => state.products);
    console.log( IsLoading)
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({
        name: '',
        price: 0,
        cate: '',
        information: {
            size: '',
            productPlace: '',
            material: '',
        },
        image: [],
    })
    function handleImageChange(e, index) {
        e.preventDefault();
        let file = e.target.files[0];
        var a = [];
        a = productData.image;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            a[e.target.getAttribute('index')] = reader.result;
            setProductData({ ...productData, image: a })
        };
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData))

    }
    const handleDelete = (product) => {
        dispatch(deleteProduct(product._id));
    }
    // cate:['all',"ban","sofa","giuong","tu"]
    const [cate,setCate]=useState('');
    const [searchItem,setSearchItem]=useState('');
    const cateSearch=(cate)=>{
        setCate(cate);
        if(cate.trim())
        {
            dispatch(getProductsByCate({
                category:cate,
                page:1,
            }))
            console.log('shop.js line 69')
            history.push(`/shop/cate?category=${cate||'none'}&page=${1}`)
        }
        else{

            dispatch(getProducts());
            history.push('/shop');
        }
    }
    const searchProducts=()=>{
        if(searchItem.trim())
        {
            dispatch(getProductsBySearch({
                searchQuery:searchItem,
            }))
            history.push(`/shop/search?searchQuery=${searchItem||'none'}`)
        }
        else{
            dispatch(getProducts());
            history.push('/shop');
        }
    }
    return (
        <div className="shop">
            <div className="shop__container">
                <div className="shop__top">
                    <div className="shop__top-detail">
                        <span>Nét hiện đại cho căn hộ là lựa chọn thông minh cho phòng khách sang trọng, tiện nghi
                            và đẳng cấp.Được thiết kế có tính năng độc đáo, tiện lợi chắc chắn sẽ đem đến những
                            phút giây thư giãn tuyệt vời mỗi khi trở về nhà.</span>
                    </div>
                </div>
                    
                <div className="shop__cate">
                    <div className="shop__cate-wrap">
                        <ul className="shop__cate-list">
                            <li className="list__item">
                                <span href="" onClick={()=>cateSearch('Ban')}>Bàn</span>
                            </li>
                            <li className="list__item">
                                <span onClick={()=>cateSearch('Sofa')}>Sofa</span>
                            </li>
                            <li className="list__item main">
                                <span  onClick={()=>cateSearch('')}>
                                    <strong>Tất cả</strong>
                                </span>
                            </li>
                            <li className="list__item">
                                <span href="" onClick={()=>cateSearch('Giuong')}>Giường</span>
                            </li>
                            <li className="list__item">
                                <span href="" onClick={()=>cateSearch('Tu')}>Tủ</span>
                            </li>
                        </ul>

                    </div>
                    <div className="shop__cate-search">
                        <input type="text" onChange={(e)=>{
                            setSearchItem(e.target.value);
                        }
                            }/>

                        <button onClick={searchProducts}>Search</button>
                    </div>
                </div>
                <div className="shop__bottom">
                    <Paper className="paper">
                        <ul className="product__list">
                            {
                                IsLoading ? 
                                <CircularProgress className="loading"/>:
                                 products.map(product => (
                                    <li className="product__list-element" key={product._id}>
                                        <Element product={product} onDelete={handleDelete} key={product._id}></Element>
                                    </li>
                                ))
                            }

                        </ul>
                    </Paper>
                    <Paper className="paper">
                        <Pagi page={page} cate={cate} cateQuery={cateQuery} searchQuery={searchQuery}/>
                    </Paper>
                </div>
                {(result&&result.result.cate==0) &&
                    <div>
                        <form onSubmit={handleSubmit} >
                            <label>
                                Name:
                                <input name="name"
                                    type="text"
                                    value={productData.name}
                                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                                />
                            </label>
                            <label>
                                Giá:
                                <input name="price"
                                    type="text"
                                    value={productData.price}
                                    onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                                />
                            </label>
                            <label>
                                Loai:
                                <input name="cate"
                                    type="text"
                                    value={productData.cate}
                                    onChange={(e) => setProductData({ ...productData, cate: e.target.value })}
                                />
                            </label>
                            <label>
                                Thông tin:
                                size:
                                <input name="size"
                                    type="text"
                                    value={productData.information.size}
                                    onChange={(e) => setProductData({ ...productData, information: { ...productData.information, size: e.target.value } })}
                                />
                                Xuất xứ:
                                <input name="productPlace"
                                    type="text"
                                    value={productData.information.productPlace}
                                    onChange={(e) => setProductData({ ...productData, information: { ...productData.information, productPlace: e.target.value } })}
                                />
                                Vat lieu:
                                <input name="material"
                                    type="text"
                                    value={productData.information.material}
                                    onChange={(e) => setProductData({ ...productData, information: { ...productData.information, material: e.target.value } })}
                                />
                            </label>
                            <label>
                                Hình ảnh:
                                <input type="file" name="" onChange={handleImageChange} index="0" />
                                <input type="file" name="" onChange={handleImageChange} index="1" />
                                <input type="file" name="" onChange={handleImageChange} index="2" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                }               
            </div>
        </div >
    )
}
