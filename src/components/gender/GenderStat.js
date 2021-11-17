import React, { useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';
import './genderstat.css';

const GenderStat = ({ data }) => {
  const [seniorMale, setSeniorMale] = useState(0);
  const [seniorFemale, setSeniorFemale] = useState(0);
  const [pathMale, setPathMale] = useState(0);
  const [pathFemale, setPathFemale] = useState(0);
  const [adMale, setAdMale] = useState(0);
  const [adFemale, setAdFemale] = useState(0);

  useEffect(() => {
    const getGenData = () => {
      for (var i in data) {
        if (data[i].club === 'Senior Youth' && data[i].gender === 'Male') {
          setSeniorMale(data[i].total);
        } else if (
          data[i].club === 'Senior Youth' &&
          data[i].gender === 'Female'
        ) {
          setSeniorFemale(data[i].total);
        } else if (data[i].club === 'Pathfinder' && data[i].gender === 'Male') {
          setPathMale(data[i].total);
        } else if (
          data[i].club === 'Pathfinder' &&
          data[i].gender === 'Female'
        ) {
          setPathFemale(data[i].total);
        } else if (data[i].club === 'Adventurer' && data[i].gender === 'Male') {
          setAdMale(data[i].total);
        } else if (
          data[i].club === 'Adventurer' &&
          data[i].gender === 'Female'
        ) {
          setAdFemale(data[i].total);
        }
      }
    };

    getGenData();
  }, []);
  return (
    <div className='genTable'>
      <h4>Gender Statistics</h4>

      <Table>
        <TableHead>
          <TableRow
            style={{
              backgroundColor: 'rgb(251, 251, 255)',
            }}
          >
            <TableCell>CLUB</TableCell>
            <TableCell>MALE</TableCell>
            <TableCell>FEMALE</TableCell>
            <TableCell>TOTAL</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow key='senior'>
            <TableCell>SENIOR YOUTH</TableCell>
            <TableCell>{seniorMale}</TableCell>
            <TableCell>{seniorFemale}</TableCell>
            <TableCell>{seniorMale + seniorFemale}</TableCell>
          </TableRow>
          <TableRow key='pathfinder'>
            <TableCell>PATHFINDER</TableCell>
            <TableCell>{pathMale}</TableCell>
            <TableCell>{pathFemale}</TableCell>
            <TableCell>{pathMale}</TableCell>
          </TableRow>
          <TableRow key='adventurer'>
            <TableCell>ADVENTURER</TableCell>
            <TableCell>{adMale}</TableCell>
            <TableCell>{adFemale}</TableCell>
            <TableCell>{adMale + adFemale}</TableCell>
          </TableRow>
          <TableRow key='total'>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              TOTAL
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {seniorMale + pathMale + adMale}
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {seniorFemale + pathFemale + adFemale}
            </TableCell>
            <TableCell style={{ fontSize: 14, fontWeight: 600 }}>
              {seniorMale +
                pathMale +
                adMale +
                seniorFemale +
                pathFemale +
                adFemale}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default GenderStat;
