import "./project.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export default function Project() {
  return (
    <div className="project">
      <div className="projectTitleContainer">
        <h1 className="projectTitle">Project</h1>
        <Link to="/newproject">
          <button className="projectAddButton">Create</button>
        </Link>
      </div>
      <div className="projectTop">
          <div className="projectTopRight">
              <div className="projectInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="projectInfoImg" />
                  <span className="projectName">Apple Airpods</span>
              </div>
              <div className="projectInfoBottom">
                  <div className="projectInfoItem">
                      <span className="projectInfoKey">id:</span>
                      <span className="projectInfoValue">123</span>
                  </div>
                  <div className="projectInfoItem">
                      <span className="projectInfoKey">sales:</span>
                      <span className="projectInfoValue">5123</span>
                  </div>
                  <div className="projectInfoItem">
                      <span className="projectInfoKey">active:</span>
                      <span className="projectInfoValue">yes</span>
                  </div>
                  <div className="projectInfoItem">
                      <span className="projectInfoKey">in stock:</span>
                      <span className="projectInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="projectBottom">
          <form className="projectForm">
              <div className="projectFormLeft">
                  <label>project Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="projectFormRight">
                  <div className="projectUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="projectUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="projectButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}