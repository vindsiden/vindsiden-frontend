import React from 'react';
import {Map as ReactLeafletMap, TileLayer} from 'react-leaflet';

import '!!style!css!node_modules/leaflet/dist/leaflet.css';

class Map extends React.Component {
    render() {
        return (
            <ReactLeafletMap {...this.props}>
                <TileLayer
                    url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=TODO-INSERT-TOKEN-HERE"
                    scrollWheelZoom={false}
                    id="mapbox.streets"
                    attribution={'<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'}
                />
                {this.props.children}
            </ReactLeafletMap>
        )
    }
}

Map.defaultProps = {
    zoom: 12,
    maxZoom: 20,
    center: [59.920455, 10.752007]
};

export default Map;
