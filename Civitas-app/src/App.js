import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Counter from './Component/Counter.jsx';
import Profile from './Component/Profile.js';
import AppStore from './Stores/AppStore.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: AppStore.getCounterNum(),
    }
    this._onChange = this. _onChange.bind(this);
  }

  componentDidMount(){
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState({
      counter: AppStore.getCounterNum()
    });
  }


  render() {
    return (
      <div className="App">
        <Profile/>
      </div>
    );
  }
}

export default App;
