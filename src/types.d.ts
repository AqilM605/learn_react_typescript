interface Todo{
    text:string
    complete:boolean
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo=(text:string)=>void
type DeleteTodo=(selectedTodo:Todo)=>void
type ToggleAllTodos=(complete:boolean)=>void
type EditToDo=(selectedTodo:Todo,text:string)=>void