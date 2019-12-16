import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: []
    };
  }

  listCustomers() {
    axios.get('http://localhost:3000/customers')
      .then((response) => {
        const customers = response.data.map((customer) => {
          return customer
        });
        
        this.setState({
          customers: customers
        });
      })
      .catch((error) => {
        this.setState({
          error: 'Sorry, something went wrong'
        });
      });
  }

  componentDidMount() {
    this.listCustomers()
  }
  
  render() {
    const customers = this.state.customers.map((customer, i) => {
      return <p key={i}>{customer.name}</p>
    })
    return (
      <section>
        {customers}
      </section>
    )
  }
}


CustomerList.propTypes = {
  
};

export default CustomerList;
