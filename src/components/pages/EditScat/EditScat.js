import React from 'react';

import './EditScat.scss';
import scatData from '../../../helpers/data/scatData';
import authData from '../../../helpers/data/authData';

class EditScat extends React.Component {
  state = {
    scatLocation: '',
    scatColor: '',
    scatShape: '',
    scatSize: '',
    scatTemperature: 0,
    scatViscosity: '',
    scatWasFulfilling: false,
    scatNotes: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.scatId;
    scatData.getSingleScat(editId)
      .then((response) => {
        const scat = response.data;
        this.setState({
          scatLocation: scat.location,
          scatcolor: scat.color,
          scatshape: scat.shape,
          scatSize: scat.size,
          scattemperature: scat.temperature,
          scatviscosity: scat.viscosity,
          scatWasFulfilling: scat.wasFulfilling,
          scatNotes: scat.notes,
        });
      })
      .catch((err) => console.error('could not update', err));
  }

  locationChange = (e) => {
    e.preventDefault();
    this.setState({ scatLocation: e.target.value });
  }

  colorChange = (e) => {
    e.preventDefault();
    this.setState({ scatColor: e.target.value });
  }

  shapeChange = (e) => {
    e.preventDefault();
    this.setState({ scatShape: e.target.value });
  }

  sizeChange = (e) => {
    e.preventDefault();
    this.setState({ scatSize: e.target.value });
  }

  temperatureChange = (e) => {
    e.preventDefault();
    this.setState({ scatTemperature: e.target.value });
  }

  viscosityChange = (e) => {
    e.preventDefault();
    this.setState({ scatViscosity: e.target.value });
  }

  notesChange = (e) => {
    e.preventDefault();
    this.setState({ scatNotes: e.target.value });
  }

  wasFulfillingChange = (e) => {
    this.setState({ scatWasFulfilling: e.target.checked });
  }

  updateScat = (e) => {
    e.preventDefault();
    const { scatId } = this.props.match.params.scatId;
    const {
      scatLocation,
      scatColor,
      scatShape,
      scatSize,
      scatTemperature,
      scatViscosity,
      scatWasFulfilling,
      scatNotes,
    } = this.state;
    const upadtedScat = {
      color: scatColor,
      shape: scatShape,
      size: scatSize,
      temperature: scatTemperature * 1,
      viscosity: scatViscosity,
      wasFulfilling: scatWasFulfilling,
      location: scatLocation,
      notes: scatNotes,
      uid: authData.getUid(),
    };
    scatData.putScat(scatId, upadtedScat)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to save scat:', err));
  }

  render() {
    const {
      scatLocation,
      scatcolor,
      scatshape,
      scattemperature,
      scatviscosity,
      scatwasFulfilling,
      scatNotes,
      scatSize,
    } = this.state;
    return (
      <div className="EditScat col-12">
        <h1>EditScat</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="scat-location">Location</label>
            <input
              type="text"
              className="form-control"
              id="scat-location"
              value={scatLocation}
              onChange={this.locationChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-color">Color</label>
            <input
              type="text"
              className="form-control"
              id="scat-color"
              value={scatcolor}
              onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-shape">Shape</label>
            <input
              type="text"
              className="form-control"
              id="scat-shape"
              value={scatshape}
              onChange={this.shapeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-size">Size</label>
            <input
              type="text"
              className="form-control"
              id="scat-size"
              value={scatSize}
              onChange={this.sizeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-temperature">Temperature</label>
            <input
              type="number"
              className="form-control"
              id="scat-temperature"
              value={scattemperature}
              onChange={this.temperatureChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-viscosity">Viscosity</label>
            <input
              type="text"
              className="form-control"
              id="scat-viscosity"
              value={scatviscosity}
              onChange={this.viscosityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-notes">Notes</label>
            <input
              type="text"
              className="form-control"
              id="scat-notes"
              value={scatNotes}
              onChange={this.notesChange}
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="scat-wasFulfilling"
              checked={scatwasFulfilling}
              onChange={this.wasFulfillingChange}
              />
            <label className="form-check-label" htmlFor="scat-wasFulfilling">Was it fulfilling?</label>
          </div>
          <button className="btn btn-primary" onClick={this.updateScat}>Update Scat</button>
        </form>
      </div>
    );
  }
}

export default EditScat;
