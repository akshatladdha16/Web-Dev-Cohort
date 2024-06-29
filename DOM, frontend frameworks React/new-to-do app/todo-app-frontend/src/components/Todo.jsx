//for rendering the to do 

export function Todos(todos){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todo.completed==true ?"Completed" : "Mark as completed"}</button>
            </div>
        })}
    </div>
}
//best way to render an array is to map it and then it will automatically iterate over the array with specific parameter