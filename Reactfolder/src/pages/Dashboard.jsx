// export default function Dashboard() {
//     return (
//         <div>
//             <h1>Dashboard</h1>
//         </div>
//     );
// }

// lec 71 linking the router pages using the react router 
// import { Link } from "react-router-dom";
// export default function Dashboard() {

//     return (
//         <div>This is dashboard
//             {/* <Link to="/">Homepage</Link> */}
//         </div>
//     );
// }

// lec 72 nested routes

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Dashboard() {

    return (
        <div>
            <ul>
                <li><Link to="profile"> Profile</Link></li>
                <li><Link to="settings"> Settings</Link> <br /></li>
            </ul>
            This is dashboard
            <Outlet />   { /* this outlet component is used for nested routes */}

        </div>
    );
}