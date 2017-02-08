import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });

    it('Should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {
            id: 112,
            text: "abc",
            completed: true
        }

        var action = actions.FBtoggleTodo(todoData.id, !todoData.completed)

        var spy = expect.createSpy();

        var _Todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)
        var $el = $(ReactDOM.findDOMNode(_Todo));

        TestUtils.Simulate.click($el[0])

        expect(spy).toHaveBeenCalledWith(action);
    })
});