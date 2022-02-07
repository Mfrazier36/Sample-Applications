import { useState } from "react";
import { Todo } from "./todo";


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
    var todoList = [];
    for (let i = 0; i < todoItems.length; i++) {
      var todo = todoItems[i];
      if(todo.id !== props.id)
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

  const discardChanges = props => {
    toggleEdit(props,false);
    clearEditText();
  }

  const saveChanges = props => {
    toggleEdit(props,false);
    var todoList = []
    for (let i = 0; i < todoItems.length; i++) {
      const todo = todoItems[i];
      if(todo.id === props.id)
      {
        todo.text = editTextInput;
      }
      todoList.push(todo);
    }
    setTodoItems(todoList);
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
                <ul className="container bg-dark text-white rounded">
                  <h1 className="row border-bottom border-white py-4 mb-3">
                    <strong>
                      Todo List
                    </strong>
                  </h1>

                  {todoItems.length > 0 
                  ? todoItems.map((item) => (
                    <Todo 
                      item={item}
                      editTextInput={editTextInput}
                      setEditText={setEditText}
                      saveChanges={saveChanges}
                      discardChanges={discardChanges}
                      editTodoItem={editTodoItem}
                      removeTodoItem={removeTodoItem}
                    />
                  ))
                  : (
                    <div className="row text-center bg-secondary rounded my-3 py-2">
                      <div className="col">
                        <h5>
                          You dont have any items
                        </h5>
                      </div>
                    </div>
                  )}

                  <section className="row border-top border-white mt-3 py-3" id="InputRow">
                    <div className="col">
                      <textarea className="w-100" 
                          value={textInput} 
                          onChange={(e) => setText(e.target.value)} 
                          rows={4}
                        ></textarea>
                    </div>
                    <div className="col-3">
                      <button title="Add Todo Item" className="btn btn-success w-100" type="button" onClick={() => addTodoItem()}>
                          Add
                      </button>
                      <button title="Clear All Text" className="btn btn-secondary w-100 mt-2" type="button" onClick={() => clearInputText()}>
                        Clear
                      </button>
                    </div>
                  </section>
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
