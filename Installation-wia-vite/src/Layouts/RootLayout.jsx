import { Link, Outlet, NavLink } from "react-router-dom";
import { SidebarLinksData } from "../data/SidebarLinksData";

function RootLayout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 vh-100 bg-primary">
                    <ul className="list-unstyled">
                        {/* <li><NavLink className="text-light" to="/">Static Card</NavLink></li>
                        <li><NavLink className="text-light" to="/dynamic-app">Dynamic Card</NavLink></li>
                        <li><NavLink className="text-light" to="/counter-via-hooks">Counter</NavLink></li> */}
                        
                        {SidebarLinksData.map((item)=>{
                            return(<li key={item.id}><Link className="text-light" to={item.links}>{item.menuItem}</Link></li>)
                        })}
                    </ul>
                </div>
                <div className="col-10"><Outlet /></div>
            </div>
        </div>
    )
}

export default RootLayout