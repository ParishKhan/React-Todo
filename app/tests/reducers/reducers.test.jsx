import expect from 'expect';
var df = require('deep-freeze-strict');

import * as reducers from 'reducers';

describe('Reduces', () => {
    describe('searchReducer', () => {
        it('Should set searchText', () => {
            var action = {
                type: 'NEW_SEARCH_TEXT',
                searchText: 'react'
            }

            var res = reducers.searchReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        })
    });

    describe('showCompletedReducer', () => {
        it('Should toggle show completed', () => {
            var action = {
                type: "TOGGLE_SHOW_COMPLETED",
            }

            var res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        })
    })
})