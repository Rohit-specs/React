import { Fragment, useReducer } from "react";

function UseReducer() {
    const initialCount = 0
    const finalCount = 10
    let newCount;
    
    function reducer(count,action){
        switch (action.type) {
            case "INCREASE+1":
                newCount = count+1
                break;
            case "INCREASE+2":
                newCount = count+2
                break;
            case "DECREASE-1":
                newCount = count-1
                break;
            case "DECREASE-2":
                newCount = count-2
                break;
            case "RESET":
                return initialCount
            default:
                return count
        }
        if (newCount>finalCount) {
            alert(`You can't increase value above ${finalCount}`)
            return count
        }
        if (newCount<initialCount){
            alert(`You can't decrease value below ${initialCount}`)
            return count
        }
        return newCount

    }
    const [count,dispatch] = useReducer(reducer,initialCount)
    return(
        <Fragment>
            <div className="fs-1 mb-2">Counter via userReducer</div>
        <h2 className=" display-2 fw-bold">{count}</h2>
        <div className="d-flex justify-content-center gap-2">
        <button className="fs-4 btn btn-success" onClick={()=> dispatch({type:"INCREASE+1"})}>Increment +1</button>
        <button className="fs-4 btn btn-primary" onClick={()=>dispatch({type:"DECREASE-1"})}>Decrease -1</button>
        <button className="fs-4 btn btn-success" onClick={()=>dispatch({type:"INCREASE+2"})}>Increment +2</button>
        <button className="fs-4 btn btn-primary" onClick={()=>dispatch({type:"DECREASE-2"})}>Decrease -2</button>
        <button className="fs-4 btn btn-danger" onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </div>
        </Fragment>
    )
}

export default UseReducer