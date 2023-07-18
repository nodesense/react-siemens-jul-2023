import React from 'react';
import {NavLink, Link} from 'react-router-dom';

// app/components/Header.js
// ES5 styled function
// React component, functional component
// export the function/component, so that the function can be used in another file
// EXPORT by NAME, while IMPORTing, we should use { Header } with same name
export function Header() {
    console.log('Header called ')
    // CREATE and return React V DOM
    return (
      <div>
        <h1>Product App</h1>
        <NavLink to="/" className="button" activeClassName="success" exact >Home</NavLink>
        <NavLink to="/products" className="button" activeClassName="success">Products</NavLink>
        <NavLink to="/cart" className="button" activeClassName="success">Cart</NavLink>
        <NavLink to="/checkout" className="button" activeClassName="success">Checkout</NavLink>
        <Link to="/login"   >Login</Link>
      </div>
    )
  }