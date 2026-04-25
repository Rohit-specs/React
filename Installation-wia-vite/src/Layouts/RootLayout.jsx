import { Link, Outlet,NavLink } from "react-router-dom";

function RootLayout() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 vh-100 bg-primary">
                    <ul className="list-unstyled">
                        <li><NavLink className="text-light " to="/">Static Card</NavLink></li>
                        <li><NavLink className="text-light " to="/DynamicApp">Dynamic Card</NavLink></li>
                        <li><NavLink className="text-light " to="/CounterViaHooks">Counter</NavLink></li>
                        </ul>
                    
                    
                    
                </div>
                <div className="col-md-10"><Outlet /></div>
            </div>
        </div>
    )
}

export default RootLayout