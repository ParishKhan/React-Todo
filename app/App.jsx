import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import CSS from 'Css';
import * as actions from 'actions';
var store = require('configureStore').configure()
import TodoAPI from 'TodoAPI';

store.subscribe(() => {
    var state = store.getState()
    console.dir(state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);