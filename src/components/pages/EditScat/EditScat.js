import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const { editId } = this.props.match.params.scatId;
    return (
      <div className="EditScat">
        <h1>EditScat</h1>
        <h3>the scatId is {editId}</h3>
      </div>
    );
  }
}

export default EditScat;
