export var searchReducer = (state = "", action) => {
    switch (action.type) {
        case 'NEW_SEARCH_TEXT':
        return action.searchText;

        default:
            return state;
    }
}

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_COMPLETED":
        return !state;

        default:
            return state;
    }
}