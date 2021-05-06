import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

 
const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'red', 
      background: '',
      padding: '5px 5px',
      display: '',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
        <i><FontAwesomeIcon style={{fontSize:'2em'}} icon={faMapMarkerAlt}></FontAwesomeIcon></i>
      {text}
    </div>
  );
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.202699251313696,
      lng: 27.906105643585086
        },
    zoom: 16
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '450px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCIFF1NATKeOtrvTgGI81bkPB8Fx2Qzj4I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.202699251313696}
            lng={27.906105643585086}
            text="Адвокатска кантора"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;



