import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase';

export var setSearchText = (searchText) => {
    return {
        type: "NEW_SEARCH_TEXT",
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: "TOGGLE_SHOW_COMPLETED"
    }
};

export var addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        todo
    }
};

export var FBaddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        })
    }    
};

export var addTodos = (todos) => {
    return {
        type: "ADD_TODOS",
        todos
    }
}

export var FBaddTodos = () => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child('todos');

        todoRef.once('value').then((snapshot) => {
            var todos = snapshot.val();
            var todoArr = [];

            Object.keys(todos).forEach((todoId) => {
                todoArr.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });

            dispatch(addTodos(todoArr));
        });
    }
}

export var updateTodo = (id, updates) => {
    return {
        type: "UPDATE_TODO",
        id,
        updates
    }
}

export var FBtoggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var todoRef = firebaseRef.child(`todos/${id}`);

        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        dispatch(updateTodo(id, updates));

        return todoRef.update(updates).then(() => {
            console.log('Toggle todo updated');
        })
    }
}

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.dir(result)
        }, (err) => {
            console.log('Unble to Auth: '+ err)
        });
    }
}

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log('Logged out');
        })
    }
}

export var userLogin = (uid) => {
    return {
        type: "LOGIN",
        uid
    }
}

export var userLogout = () => {
    return {
        type: "LOGOUT",
    }
}