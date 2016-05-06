import React from 'react';
import styles from './styles.css';
import {connect} from 'react-redux';
import Auth0Lock from 'auth0-lock';
import Popover from 'common/Popover';
import {logIn, logOut} from 'actions/user';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showPopup: false};
        this.onOuterClick = this.onOuterClick.bind(this);
        this.lock = new Auth0Lock('IIOmkCfJm0iJpj99UNw57Y4jI6jJdbIV', 'vindsiden.eu.auth0.com');
    }
    onOuterClick() {
        this.setState({showPopup: false});
    }
    render() {
        const {user, logIn, logOut, closeMenu} = this.props;
        if (!user.loggedIn) {
            return <a onClick={() => {
                closeMenu();
                this.lock.show({
                      authParams: {
                        scope: 'openid email user_metadata app_metadata picture'
                      }
                    }, (err, profile, token) => logIn(profile, token));
                this.setState({showPopup: false});
            }}>Log in</a>;
        }
        const {showPopup} = this.state;
        return (
            <div className={styles.userContainer} onClick={event => event.stopPropagation()}>
                <a onClick={() => this.setState({showPopup: !showPopup})}>{user.profile.name}</a>
                {
                    showPopup ? (
                        <div className={styles.popup}>
                            <a onClick={() => {
                                closeMenu();
                                logOut()
                            }}>Log out</a>
                        </div>
                    ) : null
                }
            </div>
        )
    }
}

export default connect(state => ({user: state.user}), {
    logIn,
    logOut
})(Popover(User));