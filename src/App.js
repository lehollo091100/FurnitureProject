import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faBars,faChevronCircleUp,faChevronUp,faBed,faCouch,faChair,faTrashAlt, faPhone, faMapMarked, faTruck, faFileContract, faAddressBook,faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Router.path])

  return (
    <Router>
      <div className="App">
        <ReactNotification/>
        <Header></Header>
        <Switch>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/shop/cate">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop/search">
            <Shop></Shop>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/auth">
            <Auth></Auth>
          </Route>
          <Route path="/shop/:id" exact>
            <Product></Product>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
library.add(faBars,fab, faPhone, faMapMarked, 
  faTruck, faFileContract, faAddressBook,
  faShoppingCart,faUser,faTrashAlt,faChair,faCouch,faBed,faChevronCircleUp,faChevronUp)

