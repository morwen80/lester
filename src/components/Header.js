import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className="container-fluid header">
      <nav >
        <NavLink activeClassName="is-active" to='/' exact={true} >
          <h1>Lester</h1>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
