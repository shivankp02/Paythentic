import "./project.css";

export default function Projectlist() {

  const projectDetail=[{
    projectId:"101012",
    projectName:"FoodElite",
    freelancer:"Shivank",
    employer:"Anant",
    status:"Active",
  },
  {
    projectId:"102465",
    projectName:"BookWala",
    freelancer:"Shivank",
    employer:"Anant",
    status:"Completed",
  },
  {
    projectId:"103195",
    projectName:"Password Generator",
    freelancer:"Shivank",
    employer:"Anant",
    status:"Active",
  },
  {
    projectId:"104615",
    projectName:"Chatbot",
    freelancer:"Shivank",
    employer:"Anant",
    status:"Active",
  },
   
]
  return (
    <div className="project"> 
      <h3 className="projectTitle">Project Details</h3>
      <table className="projectTable">
        <tr className="projectTr">
          <th className="projectTh">Project ID</th>
          <th className="projectTh">Project Name</th>
          <th className="projectTh">Employer</th>
          <th className="projectTh">Freelancer</th>
          <th className="projectTh">Status</th>
        </tr>
        {projectDetail.map(project => (
          <tr>
            <td>{project.projectId}</td>
            <td>{project.projectName}</td>
            <td>{project.employer}</td>
            <td>{project.freelancer}</td>
            <td>{project.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}