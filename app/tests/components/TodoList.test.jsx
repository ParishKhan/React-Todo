import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });

    it('Should render one todo component for each todo item', () => {
        var todos = [
            {
                id: 1,
                text: 'Do something'
            },
            {
                id: 2,
                text: 'Learn code'
            }
        ]

        var _todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(_todolist, Todo);

        expect(todoComponents.length).toBe(todos.length);
    });

    it('Should render nothing to do message if there is no todo', () => {
        var todos = []

        var _todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />)
        var $el = $(ReactDOM.findDOMNode(_todolist));

        expect($el.find('.container_messge').length).toBe(0);
    })
});