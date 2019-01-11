import React, { Component } from 'react';

class ZipForm extends Component {
  state = {
    value: ''
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("hey")
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>
        Zipcode:
        <input type="number"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
  }
};

export default ZipForm;