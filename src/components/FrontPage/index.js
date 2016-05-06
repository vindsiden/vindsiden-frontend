import React from 'react';
import FontAwesome from 'common/FontAwesome';
import MapView from './MapView';
import Divider from './Divider';

export default class extends React.Component {
    render() {
        return (
            <div>
                <MapView/>
                <Divider main={<span><FontAwesome name="info-circle"/>Bla bla!</span>} sub="Nye saker og ting!"/>
                <p>Nyheter og dritt</p>
                <Divider main={<span><FontAwesome name="bar-chart"/>Bla bla!</span>} sub="Ettellerannet annet kommer under her"/>
                <p>Statistikk og sånt</p>
                <p>Bla</p>
            </div>
        );
    }
}
