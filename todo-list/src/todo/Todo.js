import React from 'react';
import { EditToolbar, TodoDisplay, TodoToolbar } from "./components";

class Todo extends React.PureComponent {
    render() {
        return(
            <li className="row bg-secondary rounded my-3 py-1" key={this.props.item.id}>
                <TodoDisplay item={this.props.item} 
                editTextInput={this.props.editTextInput} 
                setEditText={this.props.setEditText} 
                />
                <EditToolbar item={this.props.item} 
                saveChanges={this.props.saveChanges} 
                discardChanges={this.props.discardChanges} 
                />
                <TodoToolbar item={this.props.item} 
                editTodoItem={this.props.editTodoItem} 
                removeTodoItem={this.props.removeTodoItem} 
                />
            </li>
        )
    }
}

Todo.propTypes = {
    item: {
        id: 0
    },
    editTextInput: "",
    setEditText: () => {},
    saveChanges: () => {},
    discardChanges: () => {},
    editTodoItem: () => {},
    removeTodoItem: () => {}
}

export default Todo;
