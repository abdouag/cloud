import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {        
    height: "50vh",
    width: "100%"};

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDMT6sK4NHoU_2rsXv8hMEEZijyOrVxhQs'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}>
           <Marker position={defaultCenter}/>
         </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
