import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CustomerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const customers = this.props.customers.map((customer, i) => {
      return <p key={i}>{customer.name}</p>
    });

    return (
      <section>
        {customers}
      </section>
    )
  }
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerList;
