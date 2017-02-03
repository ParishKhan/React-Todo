import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import CSS from 'Css';
import * as actions from 'actions';
var store = require('configureStore').configure()

store.subscribe(() => {
    console.dir(store.getState())
});

store.dispatch(actions.addTodo('learn react'));
store.dispatch(actions.setSearchText('react'));
store.dispatch(actions.toggleShowCompleted(true));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app')
);