import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavBar">
        <h1>My NAV</h1>
        <button className="btn btn-warning" onClick={this.logoutEvent}>Logout</button>
      </div>
    );
  }
}

export default MyNavBar;
