import axios from 'axios'
const API =axios.create({baseURL:'https://tshep.herokuapp.com'})
// const API =axios.create({baseURL:'http://localhost:5000'})

export const fetchProducts = (page) => API.get(`/products?page=${page}`);
export const createProduct = (newProduct) => API.post('/products', newProduct);
export const fetchProduct = (id) => API.get(`/products/${id}`);
export const deleteProduct = (id) => API.delete(`/products/${id}`);
export const fetchProductsByCate=(query)=>API.get(`/products/cate?category=${query.category || 'none'}&page=${query.page}`);
export const fetchProductsBySearch=(query)=>API.get(`/products/search?searchQuery=${query.searchQuery || 'none'}`);

export const signIn=(formData)=>API.post('/user/signin',formData);
export const signUp=(formData)=>API.post('/user/signup',formData);

export const createCart=(cart)=>API.post('/cart',cart);
export const getCart=(email)=>API.get(`/cart/${email}`);
export const deleteCart=(id)=>API.delete(`/cart/${id.email}/${id.id}`,);
export const removeCart=(id)=>API.patch(`/cart/${id.email}/${id.id}`);