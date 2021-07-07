import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from './AddTodoForm';
import {ToggleAll} from "./ToggleAll";
import {EditToDo} from "./EditToDoForm";

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false
    },

    {
        text: "Write app",
        complete: false
    }


]


function App() {
    const [todos, setTodos] = useState(initialTodos)

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const editToDo: EditToDo = (selectedTodo: Todo, newText:string) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    text: newText,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (text: string) => {
        const newTodo = {text, complete: false}
        setTodos([...todos, newTodo])
    }

    const toggleAddTodos: ToggleAllTodos = (complete:boolean) => {
        const newTodos = todos.map(todo => {
            return {
                ...todo,
                complete: !complete
            };
        });
        setTodos(newTodos);
    };


    const deleteTodo: DeleteTodo = (selectedTodo) => {
        setTodos([...todos.filter((todo => todo != selectedTodo))])
    }


    return (


        <>
            <ToggleAll toggleAllTodos={toggleAddTodos}></ToggleAll>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            <AddTodoForm addTodo={addTodo}/>
            <EditToDo editToDo={editToDo} todos={todos}/>
        </>

    )

}

export default App;
