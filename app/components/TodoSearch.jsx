import React, {Component} from 'react';

class TodoSearch extends Component {
    handleSearch() {
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(searchText, showCompleted);
    }
    render() {
        return (
            <div className="container_header">
                <div>
                    <input type="text" placeholder="Search Todo's" ref="searchText" onChange={this.handleSearch.bind(this)} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />
                        Show Completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;