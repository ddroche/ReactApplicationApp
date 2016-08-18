import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './App';
import Splash from './Splash';
import Apply from './Apply';
import Admin from './Admin';
import './index.css';

const store = createStore(reducer);

const routes = (
    <Route component={App}>
        <Route path="/apply" component={Apply} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Splash} />
    </Route>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
);
