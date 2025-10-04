import { Link, useNavigate } from "react-router";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/index">Index</Link>
                </li>
                <li>
                    <Link to="/series">View Series</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;