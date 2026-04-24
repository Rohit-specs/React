import { Outlet } from "react-router-dom";
const RootLayout = () => {
    return (
        <>
            <div>Navigation</div>
            <div><Outlet /></div>
        </>
    );
};
export default RootLayout;