import "./Topbar.css";
import logo from './logo.png'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={logo} alt="Logo" width="48px"/>
                    <span className="heading">Paythentic Support</span>
                </div>
                
                <div className="topRight">
                    <div className="topbarIconContainer" >
                        <i class="fas fa-user-cog"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}


