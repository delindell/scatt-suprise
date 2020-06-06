import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

import './MyNavBar.scss';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  logoutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  // hooks for reactStrap
  // const Example = (props) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => setIsOpen(!isOpen);

  render() {
    const { isOpen } = this.state;

    const buildNavBar = () => {
      const { authed } = this.props;
      if (authed) {
        return (
          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to='/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to='/new'>New Scat</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="btn" onClick={this.logoutEvent}>Logout</NavLink>
          </NavItem>
        </Nav>
        );
      }
      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div className="MyNavBar">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Scatt Suprise</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          {buildNavBar()}
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default MyNavBar;
