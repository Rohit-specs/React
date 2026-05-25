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
import RBImages from "../pages/RBImages"
import RBBreadcrumbs from "../pages/RBBreadcrumbs"
import RBAccordian from "../pages/RBAccordian"
import RBCarousel from "../pages/RBCarousel"
import RBDropdown from "../pages/RBDropdown"
import RBModel from "../pages/RBModel"
import RBNavbar from "../pages/RBNavbar"
import RBNavandTabs from "../pages/RBNavandTabs"
import RBOverlays from "../pages/RBOverlays"
import ReactHookForms from "../pages/forms/ReactHookForms"
import RHF_Yup from "../pages/forms/RHF_Yup"
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
                    { path: "/rb-images", element: <RBImages/> },
                    { path: "/rb-accordian", element: <RBAccordian/> },
                    { path: "/rb-breadcrumbs", element: <RBBreadcrumbs/> },
                    { path: "/rb-carousel", element: <RBCarousel/> },
                    { path: "/rb-dropdown", element: <RBDropdown/> },
                    { path: "/rb-model", element: <RBModel/> },
                    { path: "/rb-navbar", element: <RBNavbar/> },
                    { path: "/rb-navandtabs", element: <RBNavandTabs/> },
                    { path: "/rb-overlays", element: <RBOverlays/> },
                    { path: "/react-hook-forms", element: <ReactHookForms/> },
                    { path: "/react-hook-forms-with-yup", element: <RHF_Yup/> },
                ]
        }
    ]
)