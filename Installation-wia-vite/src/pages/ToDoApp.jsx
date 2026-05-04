import { useState } from "react"

function ToDoApp() {
    const [event, setEvent] = useState("")
    const [todos, setTodos] = useState([{ text: "Learn HTML, CSS and JavaScript", completed: false },
    { text: "Learn React", completed: false },
    { text: "Create Projects", completed: false },
    { text: "Upload on Github", completed: false },
    { text: "Create Portfolio Website", completed: false },
    { text: "Create Resume", completed: false },
    { text: "Apply for Job", completed: false },])

    const addTodo = () => {
        if (event.trim() === "") {
            return
        }

        setTodos([...todos, { text: event, completed: false }])
        setEvent("")
    };

    function removeTodo(index) {
        const updatedTodos = todos.filter((element,i)=>i!==index)
        setTodos(updatedTodos)
    }
    function toogleCompleted(index) {
        const updatedTodos = [...todos]
        updatedTodos[index].completed = !updatedTodos[index].completed
        setTodos(updatedTodos)
    }

    return (
        <div className="card p-4 card-todo mx-auto mt-4">
            <h3 className="text-start">Todo List</h3>
            
            <div className="input-group mb-3">
  <input type="text" className="form-control" value={event} onChange={(e)=> setEvent(e.target.value)} placeholder="Enter list item name"/>
  <button className="input-group-text" onClick={addTodo}>Add Todo item</button>
</div>



            {/* <div><input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
            <button onClick={addTodo}>Add</button></div> */}
            

            <ul className="list-unstyled">{todos.map((task, index) =>
            (
            <li key={index} className="row my-2 py-2 border-top">
                <div className="col-9 text-start"><input id="index" type="radio" className="me-2" checked={task.completed} onChange={() => toogleCompleted(index)} /><span htmlFor="index" style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span></div>
                <div className="col-3"><button className="btn btn-outline-danger btn-sm" onClick={() => removeTodo(index)}>
                    Remove
                </button></div>
                
            </li>)
            )}</ul>
        </div>
    )
}
export default ToDoApp