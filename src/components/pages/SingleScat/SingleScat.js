import React from 'react';
import { Link } from 'react-router-dom';
import './SingleScat.scss';
import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('problem getting single scat', err));
  }

  removeScat = () => {
    const { scatId } = this.props.match.params;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('could not delte', err));
  }

  render() {
    const { scat } = this.state;
    const { scatId } = this.props.match.params;
    const editLink = `/edit/${scatId}`;

    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <Link className="btn btn-warning" to={editLink}>Edit Scat</Link>
        <button className="btn btn-danger" onClick={this.removeScat}>REMOVE</button>
        <h1>{scat.location}</h1>
        <p>Color: {scat.color}</p>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Notes: {scat.notes}</p>
        <p>Location: {scat.location}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'Yes' : 'no'}</p>
      </div>
    );
  }
}

export default SingleScat;
