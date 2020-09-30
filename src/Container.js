import React, { Component } from 'react'
import AddCustomer from './AddCustomer.js';
import List from './List.js';
import { v4 as uuidv4 } from "uuid";

class Container extends Component {
    constructor(props) {
      super(props);
      this.state = {
        customers: [
            {
                name: "Brayden Wright",
                tag: "Dev"
            }
        ]
       };
    }
    addCustomer = (name, tag) => {
        const newCustomer = {
            id: uuidv4(),
            name: name,
            tag: tag
        };
        this.setState({
            customers: [...this.state.customers, newCustomer]
        });
    };
    delCustomer = id => {
        this.setState({
            customers: [
                ...this.state.customers.filter(customer => {
                    return customer.id !== id;
                })
            ]
        });
    };
    render() {
        return (
            <div>
                <AddCustomer addCustomer={this.addCustomer} />
                <List customers={this.state.customers} delCustomer={this.delCustomer} />
            </div>
        )
    }
}

export default Container;