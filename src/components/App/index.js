import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import {startApp} from 'actions/global';
import PopoverContainer from 'common/PopoverContainer';
import Header from './Header';
import Footer from './Footer';

import '!!style!css!node_modules/normalize-css/normalize.css';
import '!!style!css!node_modules/font-awesome/css/font-awesome.css';

import 'assets/scss/main.scss';

class App extends React.Component {
    componentDidMount() {
        this.props.startApp();
    }
    render() {
        return (
            <div className={styles.app}>
                <Header/>
                <div className={styles.content}>{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default connect(() => ({}), {
    startApp
})(PopoverContainer(App));
