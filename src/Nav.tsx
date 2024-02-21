import {Link, useLocation} from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    return (
        <nav className="nav nav-pills mt-2">
            <Link to="/Labs"
                  className={`nav-link ${pathname.includes("Lab") ? "active" : ""}`}>Labs</Link>
            <Link to="/Kanbas"
                  className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>
            <Link to="/hello"
                  className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
        </nav>

    );
}
export default Nav;