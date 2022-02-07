import React from 'react';

class TodoDisplay extends React.PureComponent {
    render() {
        return(
            <section className="row py-2">
                <div className="col" id={"todoDisplay" + String(this.props.item.id)} style={{letterSpacing:"1px", lineHeight:"2em"}}>
                    {this.props.item.text.split('\n').map(x => (
                        <>
                            <div>
                            {x}
                            </div>
                        </>
                    ))}
                </div>
                <div className="col pt-1" id={"todoEditInput" + String(this.props.item.id)} style={{letterSpacing:"1px"}} hidden>
                <textarea className="w-100" 
                    value={this.props.editTextInput} 
                    onChange={(e) => this.props.setEditText(e.target.value)} 
                    rows={3}
                    ></textarea>
                </div>
            </section>
        );
    }
}

TodoDisplay.propTypes = {
    item: {
        id: 0,
        text: ""
    },
    editTextInput: "",
    setEditText: () => {}
}

export default TodoDisplay;
