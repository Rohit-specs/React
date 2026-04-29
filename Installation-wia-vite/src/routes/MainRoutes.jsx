import StaticApp from "../StaticApp"
import DynamicApp from "../DynamicApp"
import CounterViaHooks from "../CounterViaHooks"
import RootLayout from "../Layouts/RootLayout"
import { createBrowserRouter } from "react-router-dom"
import ToDoApp from "../components/ToDoApp"
import { SidebarLinksData } from "../data/SidebarLinksData"
export const router = createBrowserRouter(
    [
        {
            path: "/", element: <RootLayout />,
            children:
                [
                    { path: "/", element: <StaticApp /> },
                    { path: "/dynamic-app", element: <DynamicApp /> },
                    { path: "/counter-via-hooks", element: <CounterViaHooks /> },
                    { path: "/to-do-app", element: <ToDoApp /> },
                ]
        }
    ]
)