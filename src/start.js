import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Router, Route, IndexRoute, hashHistory, browserHistory, Redirect } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Admin from './components/Admin';
import reducer from './reducers';
import CV from './components/CV';
import Technologies from './components/Technologies';
import Projects from './components/Projects';



export const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));

const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/curriculum-vitae" component={CV} />
                <Route path="/technologies" component={Technologies} />
                <Route path="/projects" component={Projects} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.querySelector('main'));
