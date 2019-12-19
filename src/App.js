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
      messages: {},
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
        this.resetMessages()
      })
      .catch((error) => {
        this.setState({
          messages: {error: 'Please select both a customer and a movie to checkout.'},
        });
        this.resetMessages()
      });
  }

  onSelect = (selected) => {
    if (selected.title) {
      this.setState({currentMovie: selected})
    }
    else if (selected.name) {
      this.setState({currentCustomer: selected})
    }
  }

  onRemove = (toRemove) => {
    if (toRemove.title) {
      this.setState({currentMovie: ''})
    }
    else if (toRemove.name) {
      this.setState({currentCustomer: ''})
    }
  }

  onAddToLib = (movie) => {
    if (this.state.movies.find(({external_id}) => external_id === movie.external_id)) {
      this.setState({
        messages: {error: `${movie.title} is already in the library`}
      })
      this.resetMessages();
      return;
    }
    axios.post('http://localhost:3000/movies', {movie})
      .then(response => {
        const movies = [...this.state.movies]
        movies.push(movie)
        this.setState({movies, messages: { success: `${movie.title} added to library` }})
        this.resetMessages();
      }).catch(console.log)
  }
  
  messages = () => {
    if (this.state.messages) { 
      if (this.state.messages.success) {
        return <div className="alert alert-success" role="alert"> {this.state.messages.success} </div>
      } else if (this.state.messages.error) {
        return <div className="alert alert-danger" role="alert"> {this.state.messages.error} </div> 
      }
    }
  }

  resetMessages = () => {
    setTimeout(() => this.setState({messages: {}}), 4000)
  }
  
  render() {
    const { movies, customers, currentCustomer, currentMovie, messages } = this.state
    return (
      <section className="App">
        <header className="App-header">
          <img src='https://live.staticflickr.com/65535/49240969981_a84cd27b76_m.jpg'alt='Movie Rentalz'/>
          {this.messages()}
        </header>
        <Nav onSelect={this.onSelect}
          onAddToLib={this.onAddToLib}
          movies={movies}
          customers={customers}
          messages={messages}/>
        <Checkout movie={currentMovie}
          customer={currentCustomer}
          onCheckout={this.onCheckout}
          onRemove={this.onRemove}/>
      </section>
    );
  }
}

export default App;
