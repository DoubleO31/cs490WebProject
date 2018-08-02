import React from 'react';
import { Link } from 'react-router-dom';
import AppActions from '../Action/AppActions.js';

class NavBar extends React.Component {
  _closeLoginWindow = () => {
    AppActions.loginWindowOff();
  }

  render(){
    return (
    <div>
      <Link to='/' onClick={this._closeLoginWindow}>
        <div class="top-menu-container">
          <img class="logo-picture" id="logo-picture" src="./logo.png" alt="logo" />
        </div>
      </Link>

      <div class="titles-container">
        <span id="site-heading"></span>
        <span id="site-subheading"></span>
      </div>
    </div>
    );
  }
}

export default NavBar;
