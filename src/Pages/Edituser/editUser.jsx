import "./Edituser.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
            </div>
            <div className="userContainer">
                <div className="showUser">
                    <div className="usershowTop">
                        <img className="userImg" 
                        src="https://source.unsplash.com/WLUHO9A_xik/50x50" 
                        alt="random pic." />
                        <div className="usershowTopTitle">
                            <div className="showUsername">Shivank Pandey</div>
                            <div className="showUsertitle">Software Engineer</div>
                        </div>
                    </div>
                    <div className="usershowBottom">
                        <span className="showuserdetails">Account Details</span>
                        <div className="showuserInfo">
                            <i class="far fa-user"></i>
                            <span className="showuserInfoTitle">Shivankp2002</span>
                        </div>
                        <div className="showuserInfo">
                            <i class="far fa-calendar-alt"></i>
                            <span className="showuserInfoTitle">04/12/2002</span>
                        </div>
                        <span className="showuserdetails">Contact Details</span>
                        <div className="showuserInfo">
                            <i class="fas fa-phone-square-alt"></i>
                            <span className="showuserInfoTitle">+91 7974610299</span>
                        </div>
                        <div className="showuserInfo">
                            <i class="far fa-envelope"></i>
                            <span className="showuserInfoTitle">Shivank@gmail.com</span>
                        </div>
                        <div className="showuserInfo">
                            <i class="fas fa-map-marker-alt"></i> 
                            <span className="showuserInfoTitle">Shivpuri | Madhya Pradesh</span>
                        </div>
                    </div>
                </div>
                <div className="updateUser">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>UserName</label>
                                <input type="text " placeholder="Shivankp2002" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text " placeholder="Shivank Pandey" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text " placeholder="Shivank@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text " placeholder="+91 7974610299" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem"> 
                                <label>Address</label>
                                <input type="text " placeholder="Shivpuri | Madhya Pradesh" className="userUpdateInput" />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" 
                                src="https://source.unsplash.com/WLUHO9A_xik/100x100" 
                                alt="random pic." />
                                <label htmlFor="file">
                                    <i class="fas fa-upload" id="userUpdateIcon"></i>
                                </label>
                                <input type="file" id="file" style={{display: "none"}} />
                            </div>
                                <button className="userUpdateBtn">Update</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

