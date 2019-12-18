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
      message: {},
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
          messages: {error}
        });
      });
  }

  onCheckout = () => {
    const params = {customer_id: this.state.currentCustomer.id,
                    due_date: '20-1-1' }
    
    axios.post(`http://localhost:3000/rentals/${this.state.currentMovie.title}/check-out`, params)
      .then((response) => {
        this.setState({
          messages: {success: `Successfully checked out ${this.state.currentMovie.title}`},
          currentCustomer: '',
          currentMovie: '',
          
        })
        console.log('success')
      })
      .catch((error) => {
        this.setState({
          messages: {error}
        });
      });

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
    const { movies, customers, currentCustomer, currentMovie } = this.state
    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our Page Wazzzzup</h1>
        </header>
        <Nav onSelect={this.onSelect} movies={movies} customers={customers} />
        {(currentMovie || currentCustomer) && <Checkout movie={currentMovie} customer={currentCustomer} onCheckout={this.onCheckout} />}
        {/* <h2>{this.state.messages}</h2> */}
      </section>
    );
  }
}

export default App;
