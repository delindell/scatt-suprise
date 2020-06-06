import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import fbConnection from '../helpers/connection';
import MyNavBar from '../components/shared/MyNavBar/MyNavBar';
import Auth from '../components/pages/Auth/Auth';
import EditScat from '../components/pages/EditScat/EditScat';
import Home from '../components/pages/Home/Home';
import SingleScat from '../components/pages/SingleScat/SingleScat';
import NewScat from '../components/pages/NewScat/NewScat';


fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavBar />
            <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute path='/home' component={Home} authed={authed} />
                  <PrivateRoute path='/new' component={NewScat} authed={authed} />
                  <PrivateRoute path='/edit/:scatId' component={EditScat} authed={authed} />
                  <PrivateRoute path='/scats/:scatId' component={SingleScat} authed={authed} />
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <Redirect from="*" to="/home" />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
