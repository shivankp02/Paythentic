import React from 'react'
import "./Topbar.css"


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Paythentic</span>
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
