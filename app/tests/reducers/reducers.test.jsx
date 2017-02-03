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
    });

    describe('todosReducer', () => {
        it('Should add todos', () => {
            var action = {
                type: "ADD_TODO",
                text: 'Bomfalleralla'
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('Should toggle todo', () => {
            var todos = [{
                id: 1,
                text: 'bom',
                completed: true,
                createdAt: 123,
                completedAt: 258
            }];

            var action = {
                type: "TOGGLE_TODO",
                id: 1
            }

            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

            it('Should add existing todos', () => {
                var todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 5000
            }];

            var action = {
                type: "ADD_TODOS",
                todos
            };

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        })
    })
})