import React from 'react';

class TodoToolbar extends React.PureComponent {
    render() {
        return (
            <section className="row py-2" id={"todoToolbar" + String(this.props.item.id)}>
                <div className="col-2">
                    <button className="btn btn-primary rounded w-100" 
                        title="Edit" 
                        type="button" 
                        onClick={() => this.props.editTodoItem(this.props.item)}>
                        &#9998;
                    </button>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger rounded w-100" 
                        title="Delete" 
                        type="button" 
                        onClick={() => this.props.removeTodoItem(this.props.item)}>
                        &#10006;
                    </button>
                </div>
            </section>
        );
    }
}

TodoToolbar.propTypes = {
    item: {
        id: 0
    },
    editTodoItem: () => {},
    removeTodoItem: () => {},
}

export default TodoToolbar;
