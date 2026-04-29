import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment, useState } from "react"
import StaticApp from "./StaticApp"
import DynamicApp from "./DynamicApp"
import CounterViaHooks from "./CounterViaHooks"
import RootLayout from "./Layouts/RootLayout"

// import ToDoApp from "./components/ToDoApp"

function App() {

    // return(
    //     <div className="text-center">
    //         <UseState/>
    //         <UseReducer/>
    //     </div>
    // )

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path='/' element={<StaticApp />} />
                    <Route path='/DynamicApp' element={<DynamicApp />} />
                    <Route path='/CounterViaHooks' element={<CounterViaHooks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}
export default App