import "./payment.css";

export default function Payment() {
  const paymentDetail=[{
    projectId:"101456",
    doap:"12-Jul-2020",
    dofp:"20-Jun-2020",
  },
  {
    projectId:"102321",
    doap:"12-Jul-2020",
    dofp:"20-Jun-2020",
  },
  {
    projectId:"103166",
    doap:"12-Jul-2020",
    dofp:"20-Jun-2020",

  },
  {
    projectId:"104156",
    doap:"12-Jul-2020",
    dofp:"20-Jun-2020",
  }  
]
  return (
    <div className="payment"> 
      <h3 className="paymentTitle">Payment Details</h3>
      <table className="paymentTable">
        <tr className="paymentTr">
          <th className="paymentTh">Poject ID</th>
          <th className="paymentTh">Date of Advance Payment</th>
          <th className="paymentTh">Date of Final Payment</th>
          
        </tr>
        {paymentDetail.map(payment => (
          <tr>
            <td>{payment.projectId}</td>
            <td>{payment.doap}</td>
            <td>{payment.dofp}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}