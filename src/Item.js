import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div className="item" key={this.props.id}>
        <div className="item-info">
          <div className="name">
            {this.props.name}
          </div>
          <div className={`tag ${this.props.tag === "Dev" ? "tag-dev" : "tag-design"}`}>
            {this.props.tag}
          </div>
        </div>
        <button onClick={() => this.props.delCustomer(this.props.id)}><i className="fas fa-trash-alt"></i></button>
      </div>
    )
  }
}

export default Item;