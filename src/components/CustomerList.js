import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

class CustomerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const customers = this.props.customers.map((customer, i) => {
      return (<Customer name={customer.name}
                        phone={customer.phone}
                        buttonText='Select'
                        key={i}
                        onSelect={() => this.props.onSelect('customer', customer.id)}/>
             )
    });

    return (
      <section className="cards-container">
        {customers}
      </section>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
