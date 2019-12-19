import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Customer extends Component {

  render() {
    return (
      <div className="card" onClick={this.props.onSelect}>
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
