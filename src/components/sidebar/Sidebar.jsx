import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/">
                                <i class="fas fa-house-user"> Dashboard</i>
                            </Link>   
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/Project">
                                <i class="fas fa-book"> Projects</i>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/Users">
                            <i class="fas fa-user" > Users</i>
                            </Link>
                        </li> 
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/Report">
                                <i class="far fa-comment-alt"> Reports</i>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/Payment">
                                <i class="fas fa-dollar-sign"> Payment</i>
                            </Link>
                        </li>
                    </ul>
            </div> 
        </div>
    ) 
}