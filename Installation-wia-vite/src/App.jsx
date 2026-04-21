import { Fragment, useReducer, useState } from "react"

function App(){
    const initialCount = 0
    const finalCount = 10
    const [state,setState] = useState(initialCount)
    function reducer(count,action){
        switch (action.type) {
            case "INCREASE+1":
                count = count+1
                break;
            case "INCREASE+2":
                count = count+2
                break;
            case "DECREASE-1":
                count = count-1
                break;
            case "DECREASE-2":
                count = count-2
                break;
            case "RESET":
                return initialCount
            default:
                return count
        }
        if (count>finalCount) {
            return finalCount
        }
        if (count<initialCount){
            return initialCount
        }
        return count

    }
    const [count,dispatch] = useReducer(reducer,initialCount)


    return(
        <div className="text-center">
        <div className="fs-1 mb-2">Counter via useState</div>
        <h1 className=" display-1 fw-bold">{state}</h1>
        <div className="d-flex justify-content-center gap-2">
        <button className="fs-4 btn btn-success" onClick={()=>setState( prev=> Math.min(finalCount,prev+1) )}>Increment +1</button>
        <button className="fs-4 btn btn-primary" onClick={()=>setState(prev=> Math.max(initialCount,prev-1))}>Decrease -1</button>
        <button className="fs-4 btn btn-success" onClick={()=>setState(prev=> Math.min(finalCount,prev+2))}>Increment +2</button>
        <button className="fs-4 btn btn-primary" onClick={()=>setState(prev=> Math.max(initialCount,prev-2))}>Decrease -2</button>
        <button className="fs-4 btn btn-danger" onClick={()=>setState(initialCount)}>RESET</button>
        </div>
        <div className="fs-1 mb-2">Counter via userReducer</div>
        <h2 className=" display-2 fw-bold">{count}</h2>
        <div className="d-flex justify-content-center gap-2">
        <button className="fs-4 btn btn-success" onClick={()=> dispatch({type:"INCREASE+1"})}>Increment +1</button>
        <button className="fs-4 btn btn-primary" onClick={()=>dispatch({type:"DECREASE-1"})}>Decrease -1</button>
        <button className="fs-4 btn btn-success" onClick={()=>dispatch({type:"INCREASE+2"})}>Increment +2</button>
        <button className="fs-4 btn btn-primary" onClick={()=>dispatch({type:"DECREASE-2"})}>Decrease -2</button>
        <button className="fs-4 btn btn-danger" onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </div>
        </div>
    )
    
}
export default App