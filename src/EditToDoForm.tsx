import React, {useState} from "react"
import {TodoListItem} from "./TodoListItem";


interface Props {
    editToDo: EditToDo;
    todos:Todo[]
}


export const EditToDo:React.FC<Props>=({editToDo,todos})=>{
    const [text, setText] = useState('');

    return(
        <form>
            <input type="text"
                   value={text}
                   onChange={
                       e=>{
                           setText(e.target.value);
                       }
                   }
            />
            <button
                onClick={e => {
                    e.preventDefault();
                    {todos.map(todo => (
                        editToDo(todo,todo.text)
                    ))}

                    setText('');
                }}
            >
              Edit
            </button>
        </form>

    )


}