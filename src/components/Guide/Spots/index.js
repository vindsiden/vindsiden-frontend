import React from 'react';
import styles from './styles.css';
import FontAwesome from 'common/FontAwesome';
import {formatCurrency} from 'utils';

class Spots extends React.Component {
    render() {
        const {isLoading, error, spots} = this.props;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p>Error fetching data</p>;
        }
        return (
            <ul className={styles.spots}>
                {spots.map(spot => {
                    return (
                        <li key={spot.id} className={styles.spot}>
                            <div className={styles.imageContainer} style={{backgroundImage: `url(${spot.image})`}}/>
                            <div className={styles.metadata}>
                                <div className={styles.header}>
                                    <h3 className={styles.address}>{property.address}</h3>
                                </div>
                                <div className={styles.attributes}>
                                    <div className={styles.attribute}>
                                        <span className={styles.label}><FontAwesome name="map-marker"/> Navn</span>
                                        <span className={styles.value}>{spot.name}</span>
                                    </div>

                                    <div className={styles.attribute}>
                                        <span className={styles.label}> Område</span>
                                        <span className={styles.value}>{spot.area}</span>
                                    </div>

                                    <div className={styles.attribute}>
                                        <span className={styles.label}> Type</span>
                                        <span className={styles.value}>{spot.type}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default Spots;
