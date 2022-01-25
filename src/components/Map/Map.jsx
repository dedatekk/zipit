import React from 'react';
import GoogleMapReact from 'google-map-react';

import useStyles from './styles';

const Map = () => {

    
    const classes = useStyles();
    const coordinates = { lat: -35.282001, lng: 149.128998 };
    const defaultMapOptins = {
        fullscreenControl: false,
        zoomControl: false,
    }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCpamY9GsJ9AqMBkY8DmB9u8L_Cqh7v8tw' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={defaultMapOptins}
            onChange={''}
            onChildClick={''}
            >
            </GoogleMapReact>
            </div>
    );
}

export default Map;