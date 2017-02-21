import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import CSS from 'Css';
import firebase from 'app/firebase';
import * as actions from 'actions';
var store = require('configureStore').configure()
//import TodoAPI from 'TodoAPI';

// Get and set todo to local storage
    // store.subscribe(() => {
    //     var state = store.getState()
    //     TodoAPI.setTodos(state.todos);
    // });

    // var initialTodos = TodoAPI.getTodos();
    // store.dispatch(actions.addTodos(initialTodos));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(actions.userLogin(user.uid));
        hashHistory.push('/todos')
    } else {
        store.dispatch(actions.userLogout());
        hashHistory.push('/')
    }
});

var requireLogin = (nextState, replace, next) => {
    if(!firebase.auth().currentUser) replace('/');
    next();
}

var redirectLoggedIn = (nextState, replace, next) => {
    if(firebase.auth().currentUser) replace('/todos');
    next();
}

store.dispatch(actions.FBaddTodos());

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" >
                <IndexRoute component={Login} onEnter={redirectLoggedIn} />
                <Route path="todos" component={TodoApp} onEnter={requireLogin} /> 
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);