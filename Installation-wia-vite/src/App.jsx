// import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Fragment, useState } from "react"
import StaticApp from "./StaticApp"
import DynamicApp from "./DynamicApp"
import CounterViaHooks from "./CounterViaHooks"
import RootLayout from "./Layouts/RootLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ToDoApp from "./components/ToDoApp"
import { router } from "./routes/MainRoutes"

function App() {
    // const router = createBrowserRouter(
    //     [
    //         { path: "/", element:<StaticApp /> },
    //         { path: "/dynamic-app", element:<DynamicApp /> },
    //         { path: "/counter-via-hooks", element:<CounterViaHooks /> },
    //         { path: "/", element:<ToDoApp /> },

    //     ]
    // )
    // const router = createBrowserRouter(
    //     [
    //         {
    //             path: "/", element: <RootLayout />,
    //             children: [
    //                 { path: "/", element: <StaticApp /> },
    //                 { path: "/dynamic-app", element: <DynamicApp /> },
    //                 { path: "/counter-via-hooks", element: <CounterViaHooks /> },
    //                 { path: "/to-do-app", element: <ToDoApp /> },]
    //         }
    //     ]
    // )

    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route element={<RootLayout />}>
        //             <Route path='/' element={<StaticApp />} />
        //             <Route path='/DynamicApp' element={<DynamicApp />} />
        //             <Route path='/CounterViaHooks' element={<CounterViaHooks />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
        <RouterProvider router={router} />

    )

}
export default App