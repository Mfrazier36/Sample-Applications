import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        nextTodoId: 0,
        todoList: [{
            id: 0,
            text: null
        }]
    },
    reducers: {
        addTodo: (state, action) => {
            var todoItem = {
                id: state.nextTodoId,
                text: action.payload
            };
            state.todoList = [...state.todoList,todoItem];
            state.nextTodoId += 1;
        },
        removeTodo: (state,action) => {
            var newTodoList = [];
            state.todoList.forEach((item) => {
                if(item.id !== action.payload.id)
                {
                    newTodoList.push(item);
                }
            });
            state.todoList = newTodoList;
        },
        updateTodo: (state,action) => {
            var newTodoList = [];
            state.todoList.forEach((item) => {
                if(item.id === action.payload.id)
                {
                    item.text = action.payload.text;
                }
                newTodoList.push(item);
            });
            state.todoList = newTodoList;
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export const AddTodo = text => dispatch => {
    setTimeout(() => {
        dispatch(addTodo(text))
    },1000);
}

export const RemoveTodo = todo => dispatch => {
    setTimeout(() => {
        dispatch(removeTodo(todo));
    },1000);
}

export const UpdateTodo = todo => dispatch => {
    setTimeout(() => {
        dispatch(updateTodo(todo));
    },1000)
}

export default todoSlice.reducer;