import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
    it('Shoud exist', () => {
        expect(AddTodo).toExist();
    });

    it('Should call handleAddTodo on valid todo submit', () => {
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        todo.refs.todo.value = "abc";

        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith('abc');
    });

    it('Shouldn not call handleAddTodo on invalid todo submit', () => {
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
        todo.refs.todo.value = "";

        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toNotHaveBeenCalled();
    });
});