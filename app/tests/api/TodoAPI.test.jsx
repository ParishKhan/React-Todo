import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    })


    it('Should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('Should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'fake data',
                completed: false
            }]

            TodoAPI.setTodos(todos)

            var actualTodo = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodo).toEqual(todos);
        });

        it('Should not set invalid todos array', () => {
            var todos = "Some data"

            TodoAPI.setTodos(todos)

            expect(localStorage.getItem('todos')).toBe(null);
        });
    })

    describe('getTodos', () => {
        it('Should return empty arrays for bad localStorage data', () => {
            var accualTodo = TodoAPI.getTodos()
            expect(accualTodo).toEqual([])
        });

        it('Should return todo if valid array in localStorage', () => {
            var todos = [{
                id: 23,
                text: 'fake data',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));
            var accualTodo = TodoAPI.getTodos('todos')
            
            expect(accualTodo).toEqual(todos)
        });
    });

    describe('filterTodos', () => {
        var todos = [{
                id: 1,
                text: 'text',
                completed: true
            },{
                id: 2,
                text: 'some text 2',
                completed: false
            },{
                id: 3,
                text: 'some text 3',
                completed: true
            }];

        it('Should return all items if showCompleted is true', () => {

            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('Should not return completed todos if showCompleted is false', () => {

            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('Should sort by completed status', () => {

            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('Should sort by search', () => {

            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });
    })
})