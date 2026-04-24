import { useState } from "react"

function ToDoApp(){
    eventArray = []
    const [event,setEvent] = useState([])
    function AddToList(data){
        setEvent(()=>{
            eventArray.push(data)
            return eventArray
        })
    }
    return(
        <div className="text-center mt-4">
        <input type="text" />
        <button onClick={()=>AddToList(data)}>Add</button>
        
        <ul>{eventArray.map((element,index)=><li key={index}>{element}</li>)}</ul>
        </div>
    )
}
export default ToDoApp