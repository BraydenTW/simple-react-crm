import React, { Component } from 'react'

class AddCustomer extends Component {
  state = {
    name: "",
    tag: ""
  }
  onNameChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onTagChange = e => {
    this.setState({
      [e.target.name]: e.target.id
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.addCustomer(this.state.name, this.state.tag);
    this.setState({
      name: "",
      tag: ""
    });
    document.getElementById("Dev").checked = false
    document.getElementById("Design").checked = false
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={this.state.name}
          onChange={this.onNameChange}
          autoComplete="off"
          required
        />
        <div className="form-tags">
          <input
            type="radio"
            name="tag"
            id="Dev"
            value={this.state.tag}
            onClick={this.onTagChange}
            required
          />
          <label for="Dev">Dev</label>
          <input
            type="radio"
            name="tag"
            id="Design"
            value={this.state.tag}
            onClick={this.onTagChange}
            required
          />
          <label for="Design">Design</label>
        </div>
        <button>
          + Add Customer
        </button>
      </form>
    )
  }
}

export default AddCustomer;