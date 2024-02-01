import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {

    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-dark  ms-2 rounded-pill">
                <span className="fa fa-shopping-cart me-1"></span> Your Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn