import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = '12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit This or That</button>
        <Link to='/scats/9874'>View Single scat</Link>
        <Link to='/new'>New scat</Link>
      </div>
    );
  }
}

export default Home;
