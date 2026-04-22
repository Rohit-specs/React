import { Fragment } from "react"
import UseReducer from "./components/UseReducer"
import UseState from "./components/UseState"

function App(){

    return(
        <div className="text-center">
            <UseState/>
            <UseReducer/>
        </div>
    )
    
}
export default App