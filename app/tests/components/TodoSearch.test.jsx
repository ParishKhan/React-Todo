import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';


import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('Should dispatch SEARCH_TEXT on input change', () => {
        var action = {
            type: "NEW_SEARCH_TEXT",
            searchText: "abc"
        }
        var spy = expect.createSpy();
        var _todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />)
        _todosearch.refs.searchText.value = "abc";

        TestUtils.Simulate.change(_todosearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('Should dispatch TOGGLE_SHOW_COMPLETE when checkbox checked', () => {
        var action = {
            type: "TOGGLE_SHOW_COMPLETED",
        }
        var spy = expect.createSpy();
        var _todosearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
        _todosearch.refs.showCompleted.checked = true;

        TestUtils.Simulate.change(_todosearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
});