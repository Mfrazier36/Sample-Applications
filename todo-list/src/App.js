import { useState } from "react";


function App() {
  const [textInput,setText] = useState("");
  const [todoId,setTodoId] = useState(0);
  const [todoItems,setTodoItems] = useState([]);
  
  const incrementId = () => setTodoId(todoId + 1);
  const clearInputText = () => setText("");

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

  return (
    <div className="container-fluid" id="LayoutContainer">
      <div className="row py-5" id="LayoutRow">
        <div className="col" id="LayoutCol">
          <section className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-4 mx-auto">
                <ul className="container py-5 bg-dark text-white rounded">
                  <h2 className="border-bottom border-white mb-4">
                    <strong>
                      Todo List
                    </strong>
                  </h2>

                  {(todoItems.map((item) => (
                    <li className="row my-2 py-1 bg-secondary rounded">
                      <div className="col" style={{letterSpacing:"1px", lineHeight:"2em"}}>
                        {item.text}
                      </div>
                      <div className="col-2">
                        <button className="btn btn-danger w-100 rounded" type="button" onClick={() => removeTodoItem(item)}>
                          &#10006;
                        </button>
                      </div>
                    </li>
                  )))}

                  <li className="row mt-5" id="InputRow">
                    <div className="col">
                      <input className="w-100" 
                          type="text" 
                          value={textInput} 
                          onChange={(e) => setText(e.target.value)} 
                        />
                    </div>
                    <div className="col-3">
                      <button className="w-100" type="button" onClick={() => addTodoItem()}>
                        Add
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
