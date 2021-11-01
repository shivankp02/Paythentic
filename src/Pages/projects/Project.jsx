import "./project.css";

export default function Projectlist() {
  const projectDetail=[{
    projectId:"101",
    projectName:"Shivank",
    projecttype:"Freelancer",
    status:"Active",
  },
  {
    projectId:"102",
    projectName:"Amit",
    projecttype:"Employer",
    status:"Blocked",
  },
  {
    projectId:"103",
    projectName:"Irfan",
    projecttype:"Employer",
    status:"Ban",
  },
  {
    projectId:"104",
    projectName:"Sumit",
    projecttype:"Employer",
    status:"Active",
  }  
]
  return (
    <div className="project"> 
      <h3 className="projectTitle">Project Details</h3>
      <table className="projectTable">
        <tr className="projectTr">
          <th className="projectTh">Project ID</th>
          <th className="projectTh">Project Name</th>
          <th className="projectTh">Project Type</th>
          <th className="projectTh">Status</th>
        </tr>
        {projectDetail.map(project => (
          <tr>
            <td>{project.projectId}</td>
            <td>{project.projectName}</td>
            <td>{project.projecttype}</td>
            <td>{project.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}