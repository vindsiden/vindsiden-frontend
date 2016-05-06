import React from 'react';
import {Map as ReactLeafletMap, TileLayer} from 'react-leaflet';

import '!!style!css!node_modules/leaflet/dist/leaflet.css';

class Map extends React.Component {
    render() {
        return (
            <ReactLeafletMap {...this.props}>
                <TileLayer
                    url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmluZHNpZGVuIiwiYSI6ImNpbnZ3cjJrMjAwcHR3ZGtsY2l2M3Fwc3IifQ.L6HBmmrQ2UqHpXjGyamHTw"
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
