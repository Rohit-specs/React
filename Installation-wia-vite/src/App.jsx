import { BrowserRouter , Route, Routes} from "react-router-dom";
import { Fragment, useState } from "react"
import UseState from "./components/UseState"
import UseReducer from "./components/UseReducer"

// import ToDoApp from "./components/ToDoApp"

function App(){

    return(
        <div className="text-center">
            <UseState/>
            <UseReducer/>
        </div>
    )

    // return(
    //     <BrowserRouter>
    //     <Routes>
            
    //         <Route path='/' element={<Static__App/>}/>
    //         <Route path='/Dynamic_app' element={<Dynamic__App/>}/>
    //         <Route path='/Cou' element={<CounterViaHooks/>}/>

    //     </Routes>
    //     </BrowserRouter>
    // )
    
}
export default App