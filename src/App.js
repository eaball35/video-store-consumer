import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Checkout from './components/Checkout';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      movies: [],
      errors: '',
      currentCustomer: '',
      currentMovie: '',
    };
  }

  componentDidMount() {
    this.fetchCustomers();
    this.fetchMovies();
  }
  
  fetchMovies() {
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

  fetchCustomers() {
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

  onSelect = (type, id) => {
    if (type === 'movie') {
      const currentMovie = this.state.movies.find(movie => movie.id === id)
      this.setState({currentMovie})
    }
    else if (type === 'customer') {
      const currentCustomer = this.state.customers.find(customer => customer.id === id)
      this.setState({currentCustomer})
    }
  }
  
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Page Wazzzzup</h1>
        </header>
          <Nav onSelect={this.onSelect} movies={this.state.movies} customers={this.state.customers} />
          <Checkout movie={this.state.currentMovie} customer={this.state.currentCustomer} onCheckout={this.onCheckout} />
          <h2>{this.state.errors}</h2>
      </section>
    );
  }
}

export default App;
