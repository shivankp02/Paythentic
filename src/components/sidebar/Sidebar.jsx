import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Admin Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/">
                                <i class="fas fa-house-user"> Home</i>
                            </Link>
                            
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/Users">
                                <i class="fas fa-user"> Users</i>
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="sidebarLink" to="/editUser">
                                <i class="fas fa-dollar-sign"> Transactions</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> 

            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <i class="fas fa-envelope"> Mail</i>
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-comments"> Feedback</i>     
                        </li>
                        <li className="sidebarListItem">
                            <i class="fas fa-comment-alt"> Messages</i>    
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    ) 
}
