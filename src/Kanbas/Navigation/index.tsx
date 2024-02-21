import React from "react";
import "./index.css"
import {Link, useLocation} from "react-router-dom";
import {
    FaRegCalendarAlt,
    FaRegUserCircle,
    FaTachometerAlt,
    FaBook,
    FaEnvelopeOpen,
    FaClock,
    FaDesktop, FaQuestionCircle,
} from "react-icons/fa";
import {FaArrowRightFromBracket} from "react-icons/fa6";
function KanbasNavigation(){
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-3" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-3 red-icon" />  },
        { label: "Courses",   icon: <FaBook className="fs-3 red-icon" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-3 red-icon" /> },
        { label: "Inbox",  icon: <FaEnvelopeOpen className="fs-3 red-icon" /> },
        { label: "History",  icon: <FaClock className="fs-3 red-icon" /> },
        { label: "Studio",  icon: <FaDesktop className="fs-3 red-icon" /> },
        { label: "Commons",  icon: <FaArrowRightFromBracket className="fs-3 red-icon" /> },
        { label: "Help",  icon: <FaQuestionCircle className="fs-3 red-icon" /> },
    ];

    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation d-none d-md-block">
            <li><Link to="http://northeastern.edu">
                <img className="wd-center-logo"
                     src="/images/northeastern_logo2.jpg"/>

            </Link></li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>{link.icon} <br/> {link.label} </Link>
                </li>
            ))}
        </ul>
    )
}

export default KanbasNavigation