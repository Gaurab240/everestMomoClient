import React from 'react'
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";


const AnyReactComponent = () => <FaMapMarkerAlt color="red" size={30} />;
const Map = () => {
    const defaultProps = {
        center: {
          lat: 27.6755549,
          lng: 85.3459238,
        },
        zoom: 11,
      };
    
  return (
    <div style={{ height: '750px', width: '100%' }}>
       
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={27.6691177115} lng={85.3360480177} />
            </GoogleMapReact>
         
    </div>
  )
}

export default Map