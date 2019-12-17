import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

class CustomerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const customers = this.props.customers.map((customer, i) => {
      return <Customer registered={customer.registered_at} name={customer.name} phone={customer.phone} streetAddress={customer.address} cityState={`${customer.city}, ${customer.state} ${customer.postal_code}`}/>
    });

    return (
      <table className="table">
        <thead className="thead-dark">
          <th>Registered</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>City/State</th>
        </thead>
        <tbody>
          {customers}
        </tbody>
    </table>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
