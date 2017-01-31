import expect from 'expect';
import * as actions from 'actions';


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
            text: 'walking'
        }

        var res = actions.addTodo(action.text)

        expect(res).toEqual(action);
    });

    it('Should generate toggle todo action', () => {
        var action = {
            type: "TOGGLE_TODO",
            id: 1
        }

        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    })
})

