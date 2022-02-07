import { useState } from "react";


function App() {
  const [textInput,setText] = useState("");
  const [editTextInput, setEditText] = useState("");
  const [todoId,setTodoId] = useState(0);
  const [todoItems,setTodoItems] = useState([]);
  
  const incrementId = () => setTodoId(todoId + 1);
  const clearInputText = () => setText("");
  const clearEditText = () => setEditText("");

  const addTodoItem = () => {
    var todoItem = {
      id: todoId,
      text: textInput 
    };
    var todoList = [...todoItems,todoItem];
    setTodoItems(todoList);
    clearInputText();
    incrementId();
  }

  const removeTodoItem = props => {
    var itemId = props.id;
    var todoList = [];
    for (let index = 0; index < todoItems.length; index++) {
      var todo = todoItems[index];
      if(todo.id !== itemId)
      {
        todoList.push(todo);
      }
    }
    setTodoItems(todoList);
  }

  const editTodoItem = props => {
    toggleEdit(props,true);
    setEditText(props.text);
  }

  const saveChanges = props => {
    toggleEdit(props,false);
    var todoList = []
    for (let index = 0; index < todoItems.length; index++) {
      const todo = todoItems[index];
      if(todo.id === props.id)
      {
        todo.text = editTextInput;
      }
      todoList.push(todo);
    }
    setTodoItems(todoList);
    clearEditText();
  }

  const discardChanges = props => {
    toggleEdit(props,false);
    clearEditText();
  }

  const toggleEdit = (props,isEditing) => {
    var displayId = "todoDisplay" + props.id.toString();
    var inputId = "todoEditInput" + props.id.toString();
    var editToolbarId = "editToolbar" + props.id.toString();
    var todoToolbarId = "todoToolbar" + props.id.toString();
    document.getElementById(inputId).toggleAttribute("hidden",!isEditing);
    document.getElementById(displayId).toggleAttribute("hidden",isEditing);
    document.getElementById(editToolbarId).toggleAttribute("hidden",!isEditing);
    document.getElementById(todoToolbarId).toggleAttribute("hidden",isEditing);
  }

  return (
    <div className="container-fluid" id="LayoutContainer">
      <div className="row py-5" id="LayoutRow">
        <div className="col" id="LayoutCol">
          <section className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-4 mx-auto">
                <ul className="container py-5 bg-dark text-white rounded">
                  <h1 className="border-bottom border-white mb-4">
                    <strong>
                      Todo List
                    </strong>
                  </h1>

                  {(todoItems.map((item) => (
                    <li className="row my-2 py-1 bg-secondary rounded">
                      <div className="row">
                        <div className="col" id={"todoDisplay" + String(item.id)} style={{letterSpacing:"1px", lineHeight:"2em"}}>
                          <p>
                            {item.text}
                          </p>
                        </div>
                        <div className="col pt-1" id={"todoEditInput" + String(item.id)} style={{letterSpacing:"1px"}} hidden>
                          <textarea className="w-100" value={editTextInput} onChange={(e) => setEditText(e.target.value)} rows={3}></textarea>
                        </div>
                      </div>

                      <div className="row py-2" id={"editToolbar" + String(item.id)} hidden>
                        <div className="col-2">
                          <button className="btn btn-success w-100 rounded" type="button" onClick={() => saveChanges(item)}>
                            &#10004;
                          </button>
                        </div>
                        <div className="col-2">
                          <button className="btn btn-danger w-100 rounded" type="button" onClick={() => discardChanges(item)}>
                            &#10006;
                          </button>
                        </div>
                      </div>

                      <div className="row py-2" id={"todoToolbar" + String(item.id)}>
                        <div className="col-2">
                          <button className="btn btn-primary w-100 rounded" type="button" onClick={() => editTodoItem(item)}>
                            &#9998;
                          </button>
                        </div>
                        <div className="col-2">
                          <button className="btn btn-danger w-100 rounded" type="button" onClick={() => removeTodoItem(item)}>
                            &#10006;
                          </button>
                        </div>
                      </div>
                    </li>
                  )))}

                  <li className="row mt-5" id="InputRow">
                    <div className="col">
                      <textarea className="w-100" 
                          type="text" 
                          value={textInput} 
                          onChange={(e) => setText(e.target.value)} 
                          rows={4}
                        ></textarea>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-success w-100" type="button" onClick={() => addTodoItem()}>
                        Add
                      </button>
                      <button className="btn btn-secondary w-100 mt-2" type="button" onClick={() => clearInputText()}>
                        Clear
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
