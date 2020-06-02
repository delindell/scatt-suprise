import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/connection';
import MyNavBar from '../components/shared/MyNavBar/MyNavBar';
import Auth from '../components/pages/Auth/Auth';
import EditScat from '../components/pages/EditScat/EditScat';
import Home from '../components/pages/Home/Home';
import SingleScat from '../components/pages/SingleScat/SingleScat';
import NewScat from '../components/pages/NewScat/NewScat';


fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavBar />
        <h2>Scatt Suprise</h2>
        <Auth />
        <EditScat />
        <Home />
        <NewScat />
        <SingleScat />
      </div>
    );
  }
}

export default App;
