  // lat: 43.202699251313696
  // lng: 27.906105643585086
  // key: 'AIzaSyCIFF1NATKeOtrvTgGI81bkPB8Fx2Qzj4I'
  

  import { Component } from 'react';
  import ReactMapGL from 'react-map-gl';
  
  class Map extends Component {
    state = {
      viewport: {
        width: '30vw',
        height: '50vh',
        latitude: 43.202699251313696,
        longitude: 27.906105643585086,
        zoom: 15
      }
    };
  
    render() {
      return (
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken="pk.eyJ1Ijoiam9zemVwaCIsImEiOiJja29laGJwdHQwY2E5Mm5yMHJiMWluMnVsIn0.nbrq8nNqcmgH8TQu4IEV8A"
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
        />
      );
    }
  }
  
  export default Map;