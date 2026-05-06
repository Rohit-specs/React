import StaticApp from "../StaticApp"
import DynamicApp from "../DynamicApp"
import CounterViaHooks from "../CounterViaHooks"
import RootLayout from "../Layouts/RootLayout"
import { createBrowserRouter } from "react-router-dom"
import ToDoApp from "../pages/ToDoApp"
import { SidebarLinksData } from "../data/SidebarLinksData"
import RBBadges from "../pages/RBBadges"
import RBButtons from "../pages/RBButtons"
import RBButtonGroups from "../pages/RBButtonGroups"
import RBCards from "../pages/RBCards"
import RBListGroup from "../pages/RBListGroup"
import RBProgresBars from "../pages/RBProgresBars"
import RBSpinners from "../pages/RBSpinners"
import RBTables from "../pages/RBTables"
import RBFigures from "../pages/RBFigures"
import RBPagination from "../pages/RBPagination"
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
                    { path: "/rb-badges", element: <RBBadges /> },
                    { path: "/rb-buttons", element: <RBButtons /> },
                    { path: "/rb-button-groups", element: <RBButtonGroups /> },
                    { path: "/rb-cards", element: <RBCards/> },
                    { path: "/rb-listgroup", element: <RBListGroup/> },
                    { path: "/rb-progress-bar", element: <RBProgresBars/> },
                    { path: "/rb-spinners", element: <RBSpinners/> },
                    { path: "/rb-tables", element: <RBTables/> },
                    { path: "/rb-figure", element: <RBFigures/> },
                    { path: "/rb-pagination", element: <RBPagination/> },
                ]
        }
    ]
)