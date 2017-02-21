import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {searchReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';


export var configure = (initialState = {}) => {
    var reducer = combineReducers({
        searchText: searchReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    });

    var store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
