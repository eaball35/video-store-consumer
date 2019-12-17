import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  render() {
    return (
      <tr>
        <td>{this.formatDate(this.props.registered)}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.streetAddress}</td>
        <td>{this.props.cityState}</td>
      </tr>
    )
  }
}


Customer.propTypes = {
  
};

export default Customer;
