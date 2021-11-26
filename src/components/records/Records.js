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

import { ArrowDownward, DeleteOutline, Edit } from '@material-ui/icons';

import EditRegister from '../EditRegister';
import Popup from '../Popup';
import ConfirmDialog from '../controls/ConfirmDialog';
import MessageDialog from '../controls/MessageDialog';
import { createStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import ReactExport from 'react-data-export';
import Pf from '../../assets/pathfinder.jpg';
import Ad from '../../assets/ad.png';
import Mg from '../../assets/mg.png';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const headCells = [
  { id: 'cid', label: 'CID' },
  { id: 'fname', label: 'Full Name' },
  { id: 'gender', label: 'Gender' },
  // { id: 'ayclass', label: 'Class' },
  { id: 'district', label: 'District' },
  { id: 'amnt', label: 'Amount' },
  { id: 'division', label: 'Division' },
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
  const [dataForEdit, setDataForEdit] = useState();
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
    'division',
    'unit',
    'ayclass',
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
          width: { wpx: 150 },
        },
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
          width: { wpx: 150 },
        },
        {
          title: 'CLASS',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
        }, // width in pixels
        {
          title: 'AGE RANGE',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
        }, // width in pixels
        {
          title: 'AMOUNT PAID',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
        }, // width in pixels
        {
          title: 'DIVISION',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
        }, // width in pixels
        {
          title: 'UNIT',
          style: { font: { sz: '12', bold: true } },
          width: { wpx: 130 },
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
        { value: data.amnt.toFixed(2), style: { font: { sz: '12' } } },
        { value: data.division.toUpperCase(), style: { font: { sz: '12' } } },
        { value: data.unit.toUpperCase(), style: { font: { sz: '12' } } },
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
                    <span>
                      <img
                        src={
                          item.ayclass === 'Pathfinder'
                            ? Pf
                            : item.ayclass === 'Adventurer'
                            ? Ad
                            : Mg
                        }
                        alt=''
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          marginTop: 5,
                          marginRight: 10,
                        }}
                      />{' '}
                      {item.fname.toUpperCase() +
                        ' ' +
                        item.lname.toUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell>{item.gender.toUpperCase()}</TableCell>
                  {/* <TableCell>{item.ayclass.toUpperCase()}</TableCell> */}
                  <TableCell>{item.district.toUpperCase()}</TableCell>
                  <TableCell>
                    <span
                      style={
                        item.amnt <= 0
                          ? {
                              color: 'crimson',
                              border: '1px solid crimson',
                              borderRadius: 8,
                              padding: 5,
                              fontSize: 12,
                            }
                          : item.amnt === 50
                          ? {
                              color: '#0000FF',
                              border: '1px solid #0000FF',
                              borderRadius: 8,
                              padding: 5,
                              fontSize: 12,
                            }
                          : {
                              color: '#18A558',
                              border: '1px solid #116530',
                              borderRadius: 8,
                              padding: 5,
                              fontSize: 12,
                            }
                      }
                    >
                      GHS {item.amnt.toFixed(2)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      style={
                        item.division === ''
                          ? {
                              color: 'crimson',
                              border: '1px solid crimson',
                              borderRadius: 8,
                              padding: 5,
                              fontSize: 12,
                            }
                          : {
                              color: '#18A558',
                              border: '1px solid #116530',
                              borderRadius: 8,
                              padding: 5,
                              fontSize: 12,
                            }
                      }
                    >
                      {item.division === ''
                        ? 'NOT ASSIGNED'
                        : item.division.toUpperCase()}
                    </span>
                  </TableCell>
                  <TableCell>{item.vegan ? 'YES' : 'NO'}</TableCell>
                  {/* <TableCell> */}
                  <div>
                    {/* <Button
                        id='more-button'
                        aria-controls='more-menu'
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <MoreVert />
                      </Button>
                      <Menu
                        id='more-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'more-button',
                        }}
                        style={{
                          left: '80%',
                          top: '50%',
                        }}
                      >
                        <MenuItem
                          className='lst-e'
                          onClick={() => {
                            openInPopup(item);
                          }}
                        >
                          <Edit /> Edit
                        </MenuItem>
                        <MenuItem className='lst' onClick={handleClose}>
                          <MonetizationOn />
                          Full Payment
                        </MenuItem>
                        <MenuItem className='lst' onClick={handleClose}>
                          <MonetizationOn />
                          Part Payment
                        </MenuItem>
                        <MenuItem
                          className='lst-d'
                          onClick={
                            (() =>
                              setConfirmDialog({
                                isOpen: true,
                                title: 'Are you sure to delete this record?',
                                subTitle:
                                  "You can't undo this operation ones completed.",
                                onConfirm: () => {
                                  handleDelete(item._id);
                                },
                              }),
                            { handleClose })
                          }
                        >
                          <DeleteOutline /> Delete
                        </MenuItem>
                      </Menu> */}
                  </div>
                  {/* </TableCell> */}
                  <TableCell
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <button
                      className='userListEdit'
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <Edit className='edit-icon' />
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
