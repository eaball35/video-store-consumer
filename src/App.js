import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from './components/CustomerList';
import MovieList from './components/MovieList';
import Checkout from './components/Checkout';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: '',
      currentCustomer: '',
      currentMovies: '',
      customers: [],
      movies: []
    };
  }

  componentDidMount() {
    this.listCustomers();
    this.listMovies();
  }
  
  listMovies() {
    axios.get('http://localhost:3000/movies')
      .then((response) => {
        this.setState({
          movies: response.data
        })
      })
      .catch((error) => {
        this.setState({
          errors: error
        });
      });
  }


  listCustomers() {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        this.setState({
          customers: response.data
        })
      })
      .catch((error) => {
        this.setState({
          errors: error
        });
      });
  }

  onCheckout() {

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h2>{this.state.errors}</h2>
          <CustomerList customers={this.state.customers} />
          <MovieList movies={this.state.movies}/>
          <Checkout customer={this.state.currentCustomer} movie={this.state.currentMovies} onCheckout={this.onCheckout} />
      </div>
    );
  }
}

export default App;
