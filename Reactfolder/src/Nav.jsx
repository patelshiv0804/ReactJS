import { Link } from "react-router-dom"
export default function Nav() {
    return (
        <div>
            <Link to="/"> HomePage </Link>
            <Link to="/dashboard"> Dashboard</Link>
        </div>
    )
}