import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import App from './components/App';
import FrontPage from './components/FrontPage';
import Guide from './components/Guide';
import About from './components/About';
import Error from './components/Error';
import configureStore from './configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={FrontPage}/>
                <Route path="guide" component={Guide}/>
                <Route path="about" component={About}/>
                <Route path="error/:status" component={Error}/>
                <Route path="*" component={Error}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
