import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { apiCamp } from '../auth/store';
import '../pages/userList/userList.css';

import axios from 'axios';

import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { Clear, Search, DeleteOutline } from '@material-ui/icons';
import { createTheme, TextField } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        padding: theme.spacing(0.5, 0.5, 0),
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      },
      textField: {
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
        margin: theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
          marginRight: theme.spacing(0.5),
          fill: 'grey',
        },
        '& .MuiInput-underline:before': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
      toolbarContainer: {
        button: {
          fill: 'blue',
          color: 'yellow',
        },
      },
    }),
  { defaultTheme }
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.toolbarContainer}>
        <GridToolbarExport />
      </div>
      <TextField
        variant='standard'
        value={props.value}
        onChange={props.onChange}
        placeholder='Search…'
        className={classes.textField}
        InputProps={{
          startAdornment: <Search fontSize='small' />,
          endAdornment: (
            <IconButton
              title='Clear'
              aria-label='Clear'
              size='small'
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <Clear fontSize='small' />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}
QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function ListCamp() {
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = data.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  const cols = [
    { headerName: 'ID', field: '_id', hide: true },
    { headerName: 'First Name', field: 'fname', width: 200, flex: 1 },
    { headerName: 'Last Name', field: 'lname', width: 200, flex: 1 },
    { headerName: 'Gender', field: 'gender', width: 150, flex: 1 },
    { headerName: 'Class', field: 'ayclass', width: 200, flex: 1 },
    { headerName: 'District', field: 'district', width: 200, flex: 1 },
    {
      field: 'vegan',
      headerName: 'Is Vegan?',
      width: 150,
      type: 'boolean',
      flex: 1,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={'/user/' + params.row.id}>
            </Link> */}
            <button className='userListEdit'>Edit</button>

            <DeleteOutline
              className='userListDelete'
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(apiCamp + `/list`)
        .then((response) => {
          setData(response.data);
          setRows(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div className='mtable'>
      <div style={{ height: '83vh', width: '98.5%', margin: '10px 10px' }}>
        <DataGrid
          components={{ Toolbar: QuickSearchToolbar }}
          rows={rows}
          columns={cols}
          disableColumnResize={true}
          pageSize={25}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
          }}
        />
      </div>
    </div>
  );
}
