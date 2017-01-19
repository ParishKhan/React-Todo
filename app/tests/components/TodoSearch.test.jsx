import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoSearch from 'TodoSearch';

describe('TodoSearch', () => {
    it('Should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('Should run onSearch with entered input text', () => {
        var spy = expect.createSpy();
        var _todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />)
        _todosearch.refs.searchText.value = "abc";

        TestUtils.Simulate.change(_todosearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith('abc', false);
    });

    it('Should run onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var _todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        _todosearch.refs.showCompleted.checked = true;

        TestUtils.Simulate.change(_todosearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith('', true);
    });
});