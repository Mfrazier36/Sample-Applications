import React from 'react';

class EditToolbar extends React.PureComponent {
    render() {
        return (
            <section className="row py-2" id={"editToolbar" + String(this.props.item.id)} hidden>
                <div className="col-2">
                    <button className="btn btn-success rounded w-100" 
                        title="Save Changes"
                        type="button" 
                        onClick={() => this.props.saveChanges(this.props.item)}>
                        &#10004;
                    </button>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger rounded w-100" 
                        title="Discard Changes" 
                        type="button" 
                        onClick={() => this.props.discardChanges(this.props.item)}>
                        &#10006;
                    </button>
                </div>
            </section>
        );
    }
}

EditToolbar.propTypes = {
    item: {
        id: 0
    },
    saveChanges: () => {},
    discardChanges: () => {},
}

export default EditToolbar;