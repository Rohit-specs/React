import UseState from "./components/UseState"
import UseReducer from "./components/UseReducer"
function CounterViaHooks(){

    return(
        <div className="text-center">
            <UseState/>
            <UseReducer/>
        </div>
    )
}
export default CounterViaHooks