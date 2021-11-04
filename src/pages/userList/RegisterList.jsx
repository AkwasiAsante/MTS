import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { apiCamp } from '../../auth/store';
import './userList.css';
import axios from 'axios';
//icons

const RegisterList = () => {
  const [data, setData] = useState([]);

  const columns = [
    { title: 'ID', field: '_id' },
    { title: 'Full Name', field: 'fname' },
    { title: 'Gender', field: 'gender' },
    { title: 'Class', field: 'ayclass' },
    { title: 'District', field: 'district' },
  ];

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(apiCamp + `/list`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <div className='mtable'>
      <MaterialTable
        title='Camp List'
        data={data}
        columns={columns}
        options={{
          headerStyle: {
            backgroundColor: 'rgb(251, 251, 255)',
            color: '#000',
          },
          search: true,
          exportButton: true,
          paging: true,
        }}
      />
    </div>
  );
};

export default RegisterList;
