import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import '../HeaderStyle.css';
//import Login from './buttons/Login'
//import Signup from './buttons/Signup'

const Header = (props) => {
    return (
        <>

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid py-2">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      <NavLink className="navbar-brand mx-auto fw-bold" to="/">E-Commerce</NavLink>

{props.auth ?
<>
<NavLink to ="/login" className="btn btn-dark ms-auto px-4 rounded-pill">
<i className="fa fa-sign-in me-2"></i>Login
</NavLink>

<NavLink to ="/register" className='btn btn-dark ms-2 px-4 rounded-pill'>
<i className="fa fa-user-plus me-2"></i>Register
</NavLink>
</>
:
<>
<CartBtn></CartBtn>

<NavLink to ="/logout" className='btn btn-dark ms-2 px-4 rounded-pill'>
<i className="fa fa-sign-out me-2"></i>Logout
</NavLink>
</>
}






    </div>
    
  </div>
</nav>


            
        </>
    )
}

export default Header