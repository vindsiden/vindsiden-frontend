import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {map} from 'lodash';
import {Link} from 'react-router';
import logo from './logo.png';
import User from './User';

const links = {
    '/': 'Forside',
    '/guide': 'Spotguide',
    '/about': 'Om'
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMenu: false};
    }
    render() {
        const {currentPath} = this.props;
        const {showMenu} = this.state;
        return (
            <header className={styles.header}>
                <div className={styles.imageContainer}>
                    <Link to="/"><img src={logo}/></Link>
                </div>
                <div className={styles.menuToggler}>
                    <button onClick={() => this.setState({showMenu: !showMenu})}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </div>
                <ul className={classnames(styles.links, showMenu && styles.open)}>
                    {map(links, (name, path) => {
                        return (
                            <li key={path} className={classnames(styles.link, currentPath === path && styles.active)}>
                                <Link to={path} onClick={() => this.setState({showMenu: false})}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })}
                    <li className={styles.link}>
                        <User closeMenu={() => this.setState({showMenu: false})}/>
                    </li>
                </ul>
            </header>
        );
    }
}

export default connect(state => {
    return {
        currentPath: state.routing.locationBeforeTransitions.pathname
    };
})(Header);