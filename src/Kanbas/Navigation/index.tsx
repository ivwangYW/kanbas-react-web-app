import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt,  FaInbox, FaComment } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoMdHelp } from "react-icons/io";
function KanbasNavigation() {
const links = [
{ label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
{ label: "Dashboard", icon: <FaTachometerAlt className="fs-2 text-danger" /> },
{ label: "Courses", icon: <FaBook className="fs-2 text-danger" /> },
{ label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 text-danger" /> },
{ label: "Inbox", icon: <FaInbox className="fs-2 text-danger" />},
{ label: "History", icon: <CiClock2 className="fs-2 text-danger" />},
{ label: "Studio", icon: <HiOutlineDesktopComputer className="fs-2 text-danger"/>},
{ label: "Commons", icon: <FaComment className="fs-2 text-danger"/>},
{ label: "Help", icon: <IoMdHelp className="fs-2 text-danger"/>},     
];

const { pathname } = useLocation();
return (
<div className="overflow-y-scroll position-fixed top-0 bottom-0" > {/*added */}

<ul className="wd-kanbas-navigation">
<li><img src="../../images/neu.png" alt="N" className="neu-logo"/></li>


{links.map((link, index) => (
<li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
<Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
</li>
))}


</ul>
</div>
);
}
export default KanbasNavigation;