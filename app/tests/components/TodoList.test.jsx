import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });

    it('Should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something',
                completed: false,
                completedAt: undefined,
                createdAt: 5000
            },
            {
                id: 2,
                text: 'Learn code',
                completed: false,
                completedAt: undefined,
                createdAt: 4000
            }
        ]

        var store = configure({
            todos
        });

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

        expect(todoComponents.length).toBe(todos.length);
    });

    it('Should render nothing to do message if there is no todo', () => {
        var todos = []

        var _todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
        var $el = $(ReactDOM.findDOMNode(_todolist));

        expect($el.find('.container_messge').length).toBe(0);
    })
});