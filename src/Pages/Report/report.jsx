import "./Report.css";

export default function Reportlist() {
    const reportDetail=[{
    reportId:"101", 
    reportBy:"Shivank",
    complaint:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rerum voluptate nostrum fugit odio nisi illum rem ut amet dolorum cumque, ipsam qui alias provident perspiciatis ea distinctio esse quod quas impedit corporis, veniam assumenda, repellendus accusantium? Unde inventore esse rerum facere exercitationem perspiciatis blanditiis hic vitae amet, ex fugiat deserunt necessitatibus porro non corporis voluptas aspernatur quibusdam eveniet nihil eum iure, saepe ipsa? Magnam id itaque unde officiis perspiciatis illum. Quisquam fugit dolore asperiores, est distinctio sint ullam quidem obcaecati laudantium quos officia esse quas magni, suscipit atque voluptatibus. Sequi nulla nisi reiciendis cumque. ",
    type:"Technical",
    projectId:"123"
    },
    {
      reportId:"102",
      reportBy:"Amit",
      complaint:"I have gotten cheated by my Client ",
      type:"Fraud",
      projectId:"123"
    },
    {
      reportId:"103",
      reportBy:"Irfan",
      complaint:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae veritatis, dignissimos animi obcaecati sint at dolores, sit incidunt odio nihil doloribus unde ducimus explicabo quis recusandae. Repellat, adipisci perferendis? Rerum, temporibus! Possimus, expedita accusamus. Vitae architecto quod praesentium, vero ipsam deserunt quo quos enim nulla voluptas est iste, quam voluptate?",
      type:"Fraud",
      projectId:"123"
    },
    {
      reportId:"104",
      reportBy:"Sumit",
      complaint:"6 inch Full HD, IPS, Acer ComfyView LED-backlit TFT LCD, 144 Hz refresh rate (16:9 Aspect Ratio)Light Laptop without Optic",
      type:"Technical",
      projectId:"123"
    }  
  ]
    return (
      <div className="report"> 
        <h3 className="reportTitle">Reports</h3>
        <table className="reportList">
            {reportDetail.map(report => (
              <tr className="reportReviewCard">
                <td className="metaBox">
                  <h3>Report Id : {report.reportId}</h3>
                  <h3>Project Id : {report.projectId}</h3>
                  <h4>Report By : {report.reportBy}</h4>
                </td>
                <td className="complaintBox"><h3>Complaint </h3> {report.complaint}</td>
                <td className="buttonBox"><h3>{report.type}</h3> 
                <button>
                  Action
                {/* <Link className="act" to="/Action">
                  Action
                </Link> */}
                </button></td>
              </tr>
            ))}
        </table>
      </div>
    );
  }









// <button className="create-proj-btn" onClick={() => setVisibility(!isDialBoxVisible)}>+ Create Project</button>
//         </div>
//         {isDialBoxVisible && <CreateProjectForm/>}