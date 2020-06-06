import React from 'react';

import ScatCard from '../../shared/ScatCard/ScatCard';
import scatData from '../../../helpers/data/scatData';

import './Home.scss';
import authData from '../../../helpers/data/authData';

class Home extends React.Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    this.getScats();
  }

  getScats = () => {
    const uid = authData.getUid();
    scatData.getScatsByUid(uid)
      .then((scats) => this.setState({ scats }))
      .catch((err) => console.error('problem with scats', err));
  }

  render() {
    const { scats } = this.state;
    const buildScatCards = scats.map((scat) => <ScatCard scat={scat} />);
    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildScatCards}
        </div>

      </div>
    );
  }
}

export default Home;
