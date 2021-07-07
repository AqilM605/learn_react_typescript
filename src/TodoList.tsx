import React, {useState} from 'react'
import {TodoListItem} from "./TodoListItem"


interface Props{
    todos:Todo[]
    toggleTodo:ToggleTodo
    deleteTodo:DeleteTodo
    editToDo:EditToDo

}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo, editToDo }) => {

    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editToDo={editToDo}/>
            ))}

        </ul>

    );
};