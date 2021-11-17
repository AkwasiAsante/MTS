import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiCamp } from '../../auth/store';
import useTable from './useTable';
import './record.css';
import {
  Backdrop,
  Button,
  CircularProgress,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core';
import {
  ArrowDownward,
  DeleteOutline,
  SignalCellularNullRounded,
} from '@material-ui/icons';

import EditRegister from '../EditRegister';
import Popup from '../Popup';
import ConfirmDialog from '../controls/ConfirmDialog';
import MessageDialog from '../controls/MessageDialog';
import { createStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const headCells = [
  { id: 'cid', label: 'CID' },
  { id: 'fname', label: 'Full Name' },
  { id: 'gender', label: 'Gender' },
  { id: 'ayclass', label: 'Class' },
  { id: 'district', label: 'District' },
  { id: 'vegan', label: 'Is Vegan ?' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      justifyContent: 'space-between',

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
  })
);

const Records = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });
  const [messageDialog, setMessageDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  const [data, setData] = useState([]);
  const [exportData, setExportData] = useState([]);
  const [dataForEdit, setDataForEdit] = useState(SignalCellularNullRounded);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [searchColumns, setSearchColumns] = useState([
    'fname',
    'lname',
    'vegan',
    'cid',
    'district',
    'church',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPaginationAndSorting,
  } = useTable(data, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;

    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items;
        else
          return items.filter((x) =>
            // x.fname.toLowerCase().includes(target.value.toLowerCase()) ||
            searchColumns.some((column) =>
              x[column]
                .toString()
                .toLowerCase()
                .includes(target.value.toLowerCase())
            )
          );
      },
    });
  };

  const handleDelete = async (_id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });

    const url = `${apiCamp}/delete/${_id}`;

    await axios.delete(url).then((res) => {
      setMessageDialog({
        isOpen: true,
        title: 'Success Message !',
        subTitle: 'Record has been deleted successfully',
      });
    });
    getData();
  };

  const openInPopup = (item) => {
    setDataForEdit(item);

    setOpenPopup(true);
  };

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(apiCamp + `/list`)
      .then((response) => {
        setData(response.data);
        setExportData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //EXPORT DATA TO EXCEL
  const DataSet = [
    {
      columns: [
        {
          title: 'ID NUMBER',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 120 },
        }, // width in pixels
        {
          title: 'FIRST NAME',
          style: { font: { sz: '12', bold: true } },
          width: { wch: 120 },
        }, // width in characters
        {
          title: 'OTHER NAME(S)',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 150 },
        }, // width in pixels
        {
          title: 'GENDER',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 120 },
        }, // width in pixels
        {
          title: 'CONTACT #',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 150 },
        }, // width in pixels
        {
          title: 'CHURCH',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 150 },
        }, // width in pixels
        {
          title: 'DISTRICT',
          style: { font: { sz: '12', bold: true } },
          width: { wch: 120 },
        }, // width in characters
        {
          title: 'CLASS',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 150 },
        }, // width in pixels
        {
          title: 'AGE RANGE',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 150 },
        }, // width in pixels
        {
          title: 'IS VEGAN ?',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
        }, // width in pixels
      ],
      data: exportData.map((data) => [
        { value: data.cid, style: { font: { sz: '12' } } },
        { value: data.fname.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.lname.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.gender.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.contact.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.church.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.district.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.ayclass.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.agerange.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.vegan ? 'YES' : 'NO', style: { font: { sz: '12' } } },
      ]),
    },
  ];
  //EXPORT DATA ENDS

  return (
    <div>
      {isLoading && (
        <Backdrop sx={{ color: '#fff', zIndex: 1000 }} open>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
      {!isLoading && (
        <>
          <Toolbar className={classes.root}>
            <div className='searchInputs'>
              <input
                id='searchInputBox'
                type='text'
                placeholder='Search Information'
                onChange={handleSearch}
              />
              <div className='searchIcon'>
                <SearchIcon />
              </div>
            </div>
            <div className='right-con'>
              <div className='generate-tag'>
                <a href='/tags'>
                  <Button variant='outlined' startIcon={<SettingsIcon />}>
                    Camp Tags
                  </Button>
                </a>
              </div>
              <div className='exportButton'>
                <ExcelFile
                  filename='YC2021 Data'
                  element={
                    <Button vairent='outlined' startIcon={<ArrowDownward />}>
                      Export Data
                    </Button>
                  }
                >
                  <ExcelSheet
                    dataSet={DataSet}
                    name='YC2021 Registration Report'
                  />
                </ExcelFile>
              </div>
            </div>
          </Toolbar>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPaginationAndSorting().map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.cid}</TableCell>
                  <TableCell>
                    {item.fname.toUpperCase() + ' ' + item.lname.toUpperCase()}
                  </TableCell>
                  <TableCell>{item.gender.toUpperCase()}</TableCell>
                  <TableCell>{item.ayclass.toUpperCase()}</TableCell>
                  <TableCell>{item.district.toUpperCase()}</TableCell>
                  <TableCell>{item.vegan ? 'YES' : 'NO'}</TableCell>
                  <TableCell>
                    <button
                      className='userListEdit'
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      Edit
                    </button>
                    <button className='userListDelete-con'>
                      <DeleteOutline
                        className='userListDelete'
                        onClick={() =>
                          setConfirmDialog({
                            isOpen: true,
                            title: 'Are you sure to delete this record?',
                            subTitle:
                              "You can't undo this operation ones completed.",
                            onConfirm: () => {
                              handleDelete(item._id);
                            },
                          })
                        }
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </>
      )}
      <Popup
        openPop={openPopup}
        setOpenPop={setOpenPopup}
        title='Edit Registration'
      >
        <EditRegister dataForEdit={dataForEdit} />
      </Popup>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <MessageDialog
        messageDialog={messageDialog}
        setMessageDialog={setMessageDialog}
        formType={2}
      />
    </div>
  );
};

export default Records;
