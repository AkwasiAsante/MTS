import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';
import { apiCamp } from '../auth/store';
import axios from 'axios';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { Clear, Search, DeleteOutline } from '@material-ui/icons';
import {
  Backdrop,
  CircularProgress,
  createTheme,
  TextField,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import EditRegister from './EditRegister';
import Popup from './Popup';

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

        '& .MuiSvgIcon-root': {
          fill: '#0074CC',
        },

        '& .MuiButton-label': {
          color: '#0074CC',
        },

        '.MuiIconButton-root.Mui-disabled': {
          color: 'pink',
          backgroundColor: 'yellow',
        },
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
      '& .MuiDataGrid-root .MuiDataGrid-root': {
        overflowY: 'hidden',
      },
    }),
  { defaultTheme }
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
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

const ListCamp = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(25);

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
    { headerName: 'ID', field: '_id', width: 200, hide: true },
    { headerName: 'First Name', field: 'fname', width: 200, flex: 1 },
    { headerName: 'Other Name(s)', field: 'lname', width: 200, flex: 1.5 },
    { headerName: 'Gender', field: 'gender', width: 150, flex: 0.8 },
    { headerName: 'Class', field: 'ayclass', width: 200, flex: 1 },
    { headerName: 'District', field: 'district', width: 200, flex: 1 },
    {
      field: 'vegan',
      headerName: 'Is Vegan?',
      width: 120,
      type: 'boolean',
      flex: 0.8,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <button className='userListEdit' onClick={() => setOpenPopup(true)}>
              Edit
            </button>

            <DeleteOutline
              className='userListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await axios
        .get(apiCamp + `/list`)
        .then((response) => {
          setData(response.data);
          setRows(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  const handleDelete = async (_id) => {
    let confirmDelete = window.confirm(
      'Do you want to delete the seledted item ?'
    );

    if (confirmDelete === true) {
      const url = `${apiCamp}/delete/${_id}`;

      await axios.delete(url).then((res) => {
        alert(_id + ' has been deleted successfully');
        // setData(data.filter((item) => item.id !== _id));
        setRows(data);
      });
    }
  };
  const handleEdit = () => {
    setOpenPopup(true);
  };
  return (
    <>
      {isLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: 1000 }} open>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      {!isLoading && (
        <div className='mtable'>
          <div style={{ height: '100vh', width: '98.5%', margin: '10px 10px' }}>
            <DataGrid
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              pagination
              components={{ Toolbar: QuickSearchToolbar }}
              rows={rows}
              columns={cols}
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
      )}

      <Popup
        openPop={openPopup}
        setOpenPop={setOpenPopup}
        title='Edit Registration'
      >
        <EditRegister />
      </Popup>
    </>
  );
};

export default ListCamp;
