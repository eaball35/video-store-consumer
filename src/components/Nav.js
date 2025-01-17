import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';

import CustomerList from './CustomerList';
import MovieList from './MovieList';
import Home from './Home';
import Search from './Search';

const Nav = (props) => {
  return (
      <nav className='navbar sticky-top navbar-expand navbar-dark bg-dark'>
        <ul className="navbar-nav mx-auto">
          <li className='nav-item'>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="/library" className="nav-link">Library</Link>
          </li>
          <li className='nav-item'>
            <Link to="/customers" className="nav-link">Customers</Link>
          </li>
          <li className='nav-item'>
            <Link to="/search" className="nav-link">Search</Link>
          </li>
        </ul>
      </nav>
  );
}

Nav.propTypes = {
  movies: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
};

export default Nav;
