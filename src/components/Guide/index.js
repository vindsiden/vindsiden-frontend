import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import Map from 'common/Map';
import {getSpots} from 'actions/guide';
import Spots from './Spots';

class Guide extends React.Component {
    componentDidMount() {
        this.props.getSpots();
    }
    render() {
        return (
            <div className={styles.guide}>
                <div className={styles.spots}>
                    <Spots {...this.props.guide}/>
                </div>
                <Map className={styles.map}/>
            </div>
        );
    }
}

export default connect(state => ({guide: state.guide}), {
    getSpots
})(Guide);
