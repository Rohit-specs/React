import { Fragment, useState } from "react"

function App(){
    const [state,setState] = useState(0)

    return(
        <div className="text-center">
        <h1 className=" display-1 fw-bold">{state}</h1>
        <div className="d-flex justify-content-center gap-2">
        <button className="fs-4 btn btn-primary" onClick={()=>setState(state+10)}>Increment</button>
        <button className="fs-4 btn btn-danger" onClick={()=>setState(state>0?state-1:0)}>Decrease</button>
        </div>
        </div>
    )
    
}
export default App