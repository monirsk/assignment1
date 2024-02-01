import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Mehmet from './components/Mehmet'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import Category from './components/Category';

import PD from './components/PD';







function App() {

// Check If User is Logged In
const [auth, setauth] = useState(false);
const [auth1, setauth1] = useState(true);

const isLoggedIn = async () => {
  try {
    const res = await fetch('/auth', {
      method : "GET",
      headers : {
        Accept : "application/json",
        "Content-Type" : "application/json"
      },
      credentials : "include"
    });

    if(res.status === 200){
      setauth(true)
      setauth1(false)
    }
    if(res.status === 401){
      setauth(false)
      setauth1(true)
    }

  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  isLoggedIn();
}, []);








  return (
 <>
 <Header auth={auth1}></Header>

 <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={ Product } />
        <Route exact path="/products/:id" component={ ProductDetail} />
        <Route exact path="/products/new/:id" component={ PD} />
        <Protectedroute exact path="/cart" component={Cart} auth={auth}/>
        <Route exact path="/checkout" component={ Checkout} />
        <Route exact path="/about"   component={About } />
        <Route exact path="/contact"   component={Contact} />
        <Route exact path="/mehmet" component={Mehmet}/>
        <Route exact path="/category" component={Category}/>

 
        <Protectedroute exact path="/login" component={Login} auth={auth1}/>
        <Protectedroute exact path="/register" component={Register} auth={auth1}/>
       <Protectedroute exact path="/Logout" component={Logout} auth={auth}/>
     

        
       
  </Switch>
  

 </>
  
  );
}

export default App;
