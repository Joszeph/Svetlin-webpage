import { useState } from "react"
import ReactMapGL,{ Marker } from 'react-map-gl'


const Map =({locations})=> {
    const [viewport, setViewport] = useState({
        width: '50vh',
        height: '50vh',
        latitude:  43.20269505233881,
        longitude: 27.906136997158796,
        zoom: 15
      })
    
      return <ReactMapGL 
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1Ijoiam9zemVwaCIsImEiOiJja29laGJwdHQwY2E5Mm5yMHJiMWluMnVsIn0.nbrq8nNqcmgH8TQu4IEV8A"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
      {locations.map((location) => (
        <div key={location.id}>
          <Marker
          latitude={location.center[1]}
          longitude={location.center[0]}
          offsetLeft={-20}
          offsetTop={-10}>
            <span role="img" aria-label="push-pin" >📌ул. „Александър Дякович” No 45, ет. 4</span>
          </Marker>
          <style jsx>{`
          span{
              color:red;
              font-weight:bold;
              font-size:0.8em;
              padding-left:38px;
          }
          `}</style>
        </div>
      ))}
    </ReactMapGL>
    }


export default Map


