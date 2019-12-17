import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CustomerList from './CustomerList';
import MovieList from './MovieList';
import Home from './Home';
import PropTypes from 'prop-types';


const Nav = (props) => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Movie List</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/library">
            <MovieList movies={props.movies}/>
          </Route>
          <Route path="/customers">
            <CustomerList customers={props.customers} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

Nav.propTypes = {
  movies: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
};

export default Nav;