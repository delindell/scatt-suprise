import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import scatShape from '../../../helpers/propz/scatShape';

import './ScatCard.scss';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatShape,
    removeScat: PropTypes.func.isRequired,
  }

  render() {
    const { scat, removeScat } = this.props;
    const singleLink = `/scats/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.location}</h5>
            <Link className="btn btn-info mb-1" to={editLink}>Edit</Link>
            <Link className="btn btn-info" to={singleLink}>View</Link>
            <button className="btn btn-danger mt-1" onClick={() => removeScat(scat.id)}>DELETE SCAT</button>
            <p className="card-text">{scat.notes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
