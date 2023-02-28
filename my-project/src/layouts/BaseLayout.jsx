import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const BaseLayout = () => {
    return(
        <div>
        <Sidebar/>
        <Outlet/>
        </div>
    )
}

export default BaseLayout