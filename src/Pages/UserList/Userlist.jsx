import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRows } from '../../dummyData';

export default function Userlist() {
  const [data,setData] = useState(userRows)

  const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'User',headerName: 'User', width: 140 },
    { field: 'email',headerName: 'Email', width: 180},
    {
      field: 'status',
      headerName: 'Status',
      width: 115, 
    },
    {
      field: 'project',
      headerName: 'Projects',
      width: 130,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/Project/" + params.row.id}>
              <button className="userListProjects">Projects</button>
            </Link>
          </>
        )
      }
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Active',
      width: 150,
      renderCell: (params) =>{
        return(
          <>
            <Link to={"/User/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <i class="fas fa-trash" id="userListDelete" onClick={() => handleDelete(params.row.id)}></i>
          </>
        )
      }
    },

  ];

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pagestatusSize={5} checkboxSelection disableSelectionOnClick />
      </div>
      <Link to="/newUser" exact>
        <button className="userAddBtn">Create New User</button>
      </Link>
    </>
  )
}
 