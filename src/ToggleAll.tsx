import React, {useState} from "react"


interface Props {
    toggleAllTodos:ToggleAllTodos
}


export const ToggleAll:React.FC<Props>=({toggleAllTodos})=>{
    const [complete, setComplete] = useState(false);

    return(
        <button onClick={e=>{toggleAllTodos(complete)
        setComplete(!complete)
        }}>Toggle All Todo</button>

)


}