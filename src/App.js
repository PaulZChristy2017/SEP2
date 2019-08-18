import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './contacts';

class App extends Component {

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('https://eagleeventplanningapi.azurewebsites.net/ep/users')
      //fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

}

export default App;
