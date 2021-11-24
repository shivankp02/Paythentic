import "./FeaturedInfo.css";
import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  const projectDetail=[{
      projectId:"101",
      projectName:"Shivank",
      freelancer:"Freelancer",
      employer:"asdd",
      status:"Active",
      completed:"True",
    },
    {
      projectId:"102",
      projectName:"Amit",
      freelancer:"Employer",
      employer:"asdd",
      status:"Blocked",
      completed:"False",
    },
    {
      projectId:"103",
      projectName:"Irfan",
      freelancer:"Employer",
      employer:"asdd",
      status:"Ban",
      completed:"True",
    },
    {
      projectId:"104",
      projectName:"Sumit",
      freelancer:"Employer",
      employer:"asdd",
      status:"Active",
      completed:"False",
    }  
  ]
  const userDetail=[
    {
      userId:"101",
      userName:"Shivank",
      usertype:"Freelancer",
      status:"Active",
    },
    {
      userId:"102",
      userName:"Amit",
      usertype:"Employer",
      status:"Blocked",
    },
    {
      userId:"103",
      userName:"Irfan",
      usertype:"Employer",
      status:"Ban",
    },
    {
      userId:"104",
      userName:"Sumit",
      usertype:"Employer",
      status:"Active",
    }  
  ]
  const Projlen = projectDetail.length
  const Userlen = userDetail.length
  return (
    <>
      <div className="featured">
        <button className="btn"> 
          <Link className="btnLink" to="/Project">
            <i class="fas fa-book"> Projects : {Projlen} </i>
              
          </Link>
        </button>
        <button className="btn">
          <Link className="btnLink" to="/Users">
            <i class="fas fa-user" > User : {Userlen}</i>
          </Link>
        </button>
      </div>        
    </>
  )
}
