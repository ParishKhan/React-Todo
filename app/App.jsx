import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';
import TodoApp from 'TodoApp';
import CSS from 'Css';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
)