import {combineReducers, createStore, compose} from 'redux';

import {searchReducer, showCompletedReducer, todosReducer, } from 'reducers';


export var configure = (initialState = {}) => {
    var reducer = combineReducers({
        searchText: searchReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    var store = createStore(reducer, initialState, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
