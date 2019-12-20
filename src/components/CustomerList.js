import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

class CustomerList extends Component {

  render() {
    const customers = this.props.customers.map((customer, i) => {
      return (<Customer name={customer.name}
                        phone={customer.phone}
                        buttonText='Select'
                        key={i}
                        onSelect={() => this.props.onSelect(customer)}/>
            )
    });

    return (
      <section className="customerpage cards-container">
        {customers}
      </section>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
