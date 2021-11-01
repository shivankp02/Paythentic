import "./Report.css";


export default function Reportlist() {
    const reportDetail=[{
    reportId:"101", 
    complaint:"Shivank",
    status:"Active",
    },
    {
      reportId:"102",
      complaint:"Amit",
      status:"Blocked",
    },
    {
      reportId:"103",
      complaint:"Irfan",
      status:"Banned",
    },
    {
      reportId:"104",
      complaint:"Sumit",
      status:"Active",
    }  
  ]
    return (
      <div className="report"> 
        <h3 className="reportTitle">Reports</h3>
        <table className="reportTable">
          <tr className="reportTr">
            <th className="reportTh">Report ID</th>
            <th className="reportTh">Complaints</th>
            <th className="reportTh">Status</th>
          </tr>
          {reportDetail.map(report => (
            <tr>
              <td>{report.reportId}</td>
              <td>{report.complaint}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }












// export default function report() {
//     return (
//         <div className="report">
//             <div className="reportTitleContainer">
//                 <h1 className="reportTitle">Edit report</h1>
//             </div>
//             <div className="reportContainer">
//                 <div className="showreport">
//                     <div className="reportshowTop">
//                         <img className="reportImg" 
//                         src="https://source.unsplash.com/WLUHO9A_xik/50x50" 
//                         alt="random pic." />
//                         <div className="reportshowTopTitle">
//                             <div className="showcomplaint">Shivank Pandey</div>
//                             <div className="showreporttitle">Software Engineer</div>
//                         </div>
//                     </div>
//                     <div className="reportshowBottom">
//                         <span className="showreportdetails">Account Details</span>
//                         <div className="showreportInfo">
//                             <i class="far fa-report"></i>
//                             <span className="showreportInfoTitle">Shivankp2002</span>
//                         </div>
//                         <div className="showreportInfo">
//                             <i class="far fa-calendar-alt"></i>
//                             <span className="showreportInfoTitle">04/12/2002</span>
//                         </div>
//                         <span className="showreportdetails">Contact Details</span>
//                         <div className="showreportInfo">
//                             <i class="fas fa-phone-square-alt"></i>
//                             <span className="showreportInfoTitle">+91 7974610299</span>
//                         </div>
//                         <div className="showreportInfo">
//                             <i class="far fa-envelope"></i>
//                             <span className="showreportInfoTitle">Shivank@gmail.com</span>
//                         </div>
//                         <div className="showreportInfo">
//                             <i class="fas fa-map-marker-alt"></i> 
//                             <span className="showreportInfoTitle">Shivpuri | Madhya Pradesh</span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="updatereport">
//                     <span className="reportUpdateTitle">Edit</span>
//                     <form className="reportUpdateForm">
//                         <div className="reportUpdateLeft">
//                             <div className="reportUpdateItem">
//                                 <label>complaint</label>
//                                 <input type="text " placeholder="Shivankp2002" className="reportUpdateInput" />
//                             </div>
//                             <div className="reportUpdateItem">
//                                 <label>Full Name</label>
//                                 <input type="text " placeholder="Shivank Pandey" className="reportUpdateInput" />
//                             </div>
//                             <div className="reportUpdateItem">
//                                 <label>Email</label>
//                                 <input type="text " placeholder="Shivank@gmail.com" className="reportUpdateInput" />
//                             </div>
//                             <div className="reportUpdateItem">
//                                 <label>Phone</label>
//                                 <input type="text " placeholder="+91 7974610299" className="reportUpdateInput" />
//                             </div>
//                             <div className="reportUpdateItem"> 
//                                 <label>Address</label>
//                                 <input type="text " placeholder="Shivpuri | Madhya Pradesh" className="reportUpdateInput" />
//                             </div>
//                         </div>

//                         <div className="reportUpdateRight">
//                             <div className="reportUpdateUpload">
//                                 <img className="reportUpdateImg" 
//                                 src="https://source.unsplash.com/WLUHO9A_xik/100x100" 
//                                 alt="random pic." />
//                                 <label htmlFor="file">
//                                     <i class="fas fa-upload" id="reportUpdateIcon"></i>
//                                 </label>
//                                 <input type="file" id="file" style={{display: "none"}} />
//                             </div>
//                                 <button className="reportUpdateBtn">Update</button>
//                         </div>
//                     </form> 
//                 </div>
//             </div>
//         </div>
//     )
// }

