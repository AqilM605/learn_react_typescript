import React, {useState} from 'react'


interface Props {
    todo: Todo
    toggleTodo: ToggleTodo;
    deleteTodo:DeleteTodo
    editToDo:EditToDo
}

export const TodoListItem: React.FC<Props> = ({todo, toggleTodo, deleteTodo,editToDo}) => {
    const [text, setText] = useState(todo.text);
    const [isEditing,setEditing]=useState(false)
    if (isEditing) {


        return (

            <li>
                <label
                    style={{textDecoration: todo.complete ? 'line-through' : undefined}}
                >
                    <input type="checkbox"
                           checked={todo.complete}
                           onClick={() => toggleTodo(todo)}/>
                    {''} {todo.text}
                    <button onClick={() => deleteTodo(todo)}>Delete</button>
                </label>
                <br/>


                <>
                    <input type="text"
                           value={text}
                           onChange={
                               e => {
                                   setText(e.target.value);
                               }
                           }
                    />
                    <button
                        onClick={e => {
                            e.preventDefault();
                            editToDo(todo, text)
                            setText('');
                         setEditing(true)
                        }}
                    >
                        Save
                    </button>
                </>


            </li>
        );
    }
else return (
        <li>
            <label
                style={{textDecoration: todo.complete ? 'line-through' : undefined}}
            >
                <input type="checkbox"
                       checked={todo.complete}
                       onClick={() => toggleTodo(todo)}/>
                {''} {todo.text}

                <button onClick={() =>setEditing(true)}>Edit</button>
                <button onClick={() => deleteTodo(todo)}>Delete</button>

            </label>
        </li>


    )}
