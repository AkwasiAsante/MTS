import React, { useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';
import './genderstat.css';

const GenderStat = ({ statData }) => {
  const [seniorMale, setSeniorMale] = useState(0);
  const [seniorFemale, setSeniorFemale] = useState(0);
  const [pathMale, setPathMale] = useState(0);
  const [pathFemale, setPathFemale] = useState(0);
  const [adMale, setAdMale] = useState(0);
  const [adFemale, setAdFemale] = useState(0);

  useEffect(() => {
    console.log(statData);
    const getGenData = () => {
      for (var i in statData) {
        if (
          statData[i].club === 'Senior Youth' &&
          statData[i].gender === 'Male'
        ) {
          setSeniorMale(statData[i].total);
        } else if (
          statData[i].club === 'Senior Youth' &&
          statData[i].gender === 'Female'
        ) {
          setSeniorFemale(statData[i].total);
        } else if (
          statData[i].club === 'Pathfinder' &&
          statData[i].gender === 'Male'
        ) {
          setPathMale(statData[i].total);
        } else if (
          statData[i].club === 'Pathfinder' &&
          statData[i].gender === 'Female'
        ) {
          setPathFemale(statData[i].total);
        } else if (
          statData[i].club === 'Adventurer' &&
          statData[i].gender === 'Male'
        ) {
          setAdMale(statData[i].total);
        } else if (
          statData[i].club === 'Adventurer' &&
          statData[i].gender === 'Female'
        ) {
          setAdFemale(statData[i].total);
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
