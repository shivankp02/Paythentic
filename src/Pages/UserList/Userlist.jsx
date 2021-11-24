import './userList.css';

export default function Userlist() {
  const userDetail=[{
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
  return (
    <div className="user"> 
      <h3 className="userTitle">User Details</h3>
      <table className="userTable">
        <tr className="userTr">
          <th className="userTh">User ID</th>
          <th className="userTh">User Name</th>
          <th className="userTh">Usertype</th>
          <th className="userTh">Status</th>
        </tr>
        {userDetail.map(user => (
          <tr>
            <td>{user.userId}</td>
            <td>{user.userName}</td>
            <td>{user.usertype}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}