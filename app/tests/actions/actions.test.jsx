import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from 'actions';

var createMockStore = configureMockStore([thunk]);


describe('Actions', () => {
    it('Should generate search text actions', () => {
        var action = {
            type: "NEW_SEARCH_TEXT",
            searchText: "Some search text"
        }

        var res = actions.setSearchText(action.searchText)
        expect(res).toEqual(action);
    });

    it('Should generate show completed action', () => {
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        }

        var res = actions.toggleShowCompleted()
        expect(res).toEqual(action);
    })

    it('Should generate add todo action', () => {
        var action = {
            type: "ADD_TODO",
            todo: {
                id: '111',
                text: 'anything',
                completed: false,
                createdAt: 5000
            }
        }

        var res = actions.addTodo(action.todo)

        expect(res).toEqual(action);
    });

    it('Should generate add todos action', () => {
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
        }

        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });

    it('Should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = "Todo text";

        store.dispatch(actions.FBaddTodo(todoText)).then(() => {
            const actions = store.getActions();

            expect(actions[0]).toInclude({
                type: "ADD_TODO"
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    })

    it('Should generate toggle todo action', () => {
        var action = {
            type: "TOGGLE_TODO",
            id: 1
        }

        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    })
})

