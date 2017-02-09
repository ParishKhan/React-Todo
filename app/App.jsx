import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import CSS from 'Css';
import * as actions from 'actions';
var store = require('configureStore').configure()
import TodoAPI from 'TodoAPI';

// Get and set todo to local storage
    // store.subscribe(() => {
    //     var state = store.getState()
    //     TodoAPI.setTodos(state.todos);
    // });

    // var initialTodos = TodoAPI.getTodos();
    // store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.FBaddTodos());

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);