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

    // const []
    const addTodo = () => {
        if (event.trim() === "") {
            return
        }

        setTodos([...todos, { text: event, completed: false }])
        setTask("")
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
        <div className=" mt-4">
            <input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
            <button onClick={addTodo}>Add</button>

            <ul>{todos.map((task, index) =>
            (<li key={index} className="d-flex gap-2">
                <div className=""><input type="radio" className="me-2" checked={task.completed} onChange={() => toogleCompleted(index)} /></div>
                <span className="" style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
                <button className="" className="btn btn-outline-danger btn-sm" onClick={() => removeTodo(index)}>
                    Remove
                </button>
            </li>)
            )}</ul>
        </div>
    )
}
export default ToDoApp