import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('Should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to state on handleAddTodo', () => {
        var todoText = "test";
        var _TodoApp = TestUtils.renderIntoDocument(<TodoApp />)
        _TodoApp.setState({
            todos : []
        });
        _TodoApp.handleAddTodo(todoText)

        expect(_TodoApp.state.todos[0].text).toBe(todoText);
        expect(_TodoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('Should toggle completed value when handdleOnToggle called', () => {
        var todoData = {
            id: 1,
            text: "abc",
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };

        var _TodoApp = TestUtils.renderIntoDocument(<TodoApp />);
        _TodoApp.setState({
            todos: [todoData]
        });

        expect(_TodoApp.state.todos[0].completed).toBe(false);
        _TodoApp.handleOnToggle(1);
        expect(_TodoApp.state.todos[0].completed).toBe(true);
        expect(_TodoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('Should toggle from true to false, completedAt get removed', () => {
        var todoData = {
            id: 1,
            text: "abc",
            completed: true,
            createdAt: 0,
            completedAt: 123
        };

        var _TodoApp = TestUtils.renderIntoDocument(<TodoApp />);
        _TodoApp.setState({
            todos: [todoData]
        });

        expect(_TodoApp.state.todos[0].completed).toBe(true);
        _TodoApp.handleOnToggle(1);
        expect(_TodoApp.state.todos[0].completed).toBe(false);
        expect(_TodoApp.state.todos[0].createdAt).toNotExist();
    });
});