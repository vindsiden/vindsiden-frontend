import React from 'react';
import styles from './styles.css';

class Divider extends React.Component {
    render() {
        const {main, sub} = this.props;
        return (
            <div className={styles.divider}>
                <h2>{main}</h2>
                <p>{sub}</p>
            </div>
        )
    }
}

Divider.propTypes = {
    main: React.PropTypes.node.isRequired,
    sub: React.PropTypes.string.isRequired
};

export default Divider;
