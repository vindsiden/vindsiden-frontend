import React from 'react';
import styles from './styles.css';
import MainContainer from 'common/MainContainer';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <MainContainer className={styles.content}>vindsiden.no: CC BY</MainContainer>
            </footer>
        )
    }
}

export default Footer;
