import React from 'react';
import styles from './styles.css';
import httpStatus from 'http-status';

class Error extends React.Component {
    render() {
        let errorCode = this.props.params.status || 404;
        let errorName = httpStatus[errorCode];
        if (!errorName) {
            errorCode = 404;
            errorName = httpStatus[404];
        }
        return (
            <div className={styles.error}>
                <h1 className={styles.code}>{errorCode}</h1>
                <p className={styles.name}>{errorName}</p>
            </div>
        );
    }
}

export default Error;