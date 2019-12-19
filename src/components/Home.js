import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <section className='homepage'>
        <header>
          <h1>Welcome to our Movie Rental Manager!</h1>
          <h4>Please select a customer and movie to checkout or search for new movies to add to the rental library.</h4>
        </header>
      </section>
    );
  }
}

Home.propTypes = { 
};

export default Home;
