import React, { useState } from 'react'
import Products from '../Products'
import { Link } from 'react-router-dom'

const Header = ({ addToCart, cart }) => {

  return (
    <>
    <div>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <Link to={'/cart'}>Cart {cart.length}</Link>
    </div>

    <Products onSelectedProduct={addToCart} />
    </>
    
  )
}

export default Header
