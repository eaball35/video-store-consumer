import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.phone}</p>
          <button className="btn btn-secondary"
            onClick={this.props.onSelect}>
            {this.props.buttonText}
          </button>
        </div>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Customer;
