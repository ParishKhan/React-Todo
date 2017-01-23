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
    })
})