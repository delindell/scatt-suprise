import React from 'react';

import './ScatCard.scss';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard">
        {scat.location}
      </div>
    );
  }
}

export default ScatCard;
