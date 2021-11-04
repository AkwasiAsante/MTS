import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Mg from '../../assets/mg.png';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    // {
    //   field: 'fname',
    //   headerName: 'Full Name',
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className='userListUser'>
    //         <img className='userListImg' src={Mg} alt='' />
    //         {params.row.fname}
    //       </div>
    //     );
    //   },
    // },
    { field: 'gender', headerName: 'Gender', width: 200 },
    {
      field: 'ayclass',
      headerName: 'Class',
      width: 120,
    },
    {
      field: 'district',
      headerName: 'District',
      width: 160,
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
