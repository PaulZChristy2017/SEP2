import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './users';
import Customers from './customers';
import Events from './events';

class App extends Component {

  render() {
    return (

      <div class="Body">

        <div class="Customers">
          <Customers customers={this.state.customers} />
        </div>

        <div class="Users">
          <Users users={this.state.users} />
        </div>

        <div class="Events">
          <Events events={this.state.events} />
        </div>

      </div>
       
    )
  }
  
  state = {
    users:  [],
    customers: [],
    events: []
  }

  componentDidMount() {
        fetch("https://eagleeventplanningapi.azurewebsites.net/ep/users")
        //fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data })
        })
        .catch(console.log)

        fetch("https://eagleeventplanningapi.azurewebsites.net/ep/customers")
        //fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
          this.setState({ customers: data })
        })
        .catch(console.log)

        fetch("https://eagleeventplanningapi.azurewebsites.net/ep/events")
        //fetch("http://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((data) => {
          this.setState({ events: data })
        })
        .catch(console.log)

  }

}

export default App;
