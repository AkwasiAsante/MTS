import React, { useState } from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from '@material-ui/core';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

import './church.css';

const Church = ({ churchData, dietData, divisionData }) => {
  const [showGraphTable, setShowGraphTable] = useState(0);
  const [title, setTitle] = useState('Church Based Statistics');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className='graphTable'>
      <div className='gtButtons'>
        <button onClick={() => setShowGraphTable(0)}>Show Graph</button>
        <button onClick={() => setShowGraphTable(1)}>Show Table</button>
        <button onClick={() => setShowGraphTable(2)}>Diet Chart</button>
        <button onClick={() => setShowGraphTable(3)}>Divisions</button>
      </div>

      <div className='gtContent'>
        <h3 className='chartTitle'>{title}</h3>
        {showGraphTable === 0 && (
          <div className='graphShow'>
            <ComposedChart
              width={900}
              height={250}
              data={churchData}
              className='chartCh'
            >
              <XAxis dataKey='church' />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke='#f5f5f5' />

              <Bar dataKey='total' barSize={30} fill='#413ea0' />
            </ComposedChart>
          </div>
        )}
        {showGraphTable === 1 && (
          <div className='tableShow'>
            <Table>
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: 'rgb(251, 251, 255)',
                  }}
                >
                  <TableCell>CHURCH</TableCell>
                  <TableCell>DISTRICT</TableCell>
                  <TableCell>TOTAL</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {churchData.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {data.church.toUpperCase()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {data.district.toUpperCase()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      {data.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        {showGraphTable === 3 && (
          <div className='tableShow'>
            <Table>
              <TableHead>
                <TableRow
                  style={{
                    backgroundColor: 'rgb(251, 251, 255)',
                  }}
                >
                  <TableCell>DIVISION</TableCell>
                  <TableCell>GENDER</TableCell>
                  <TableCell>TOTAL</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {divisionData.map((data) => (
                  <TableRow key={data._id + data.gender}>
                    <TableCell
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {data.division === ''
                        ? 'NOT ASSIGNED'
                        : data.division.toUpperCase()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {data.gender.toUpperCase()}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      {data.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {showGraphTable === 2 && (
          <div className='pieShow'>
            <PieChart width={730} height={250}>
              <Pie
                data={dietData}
                dataKey='total'
                nameKey='diet'
                cx='50%'
                cy='50%'
                outerRadius={50}
                fill='#8884d8'
              />
              <Pie
                data={dietData}
                dataKey='total'
                nameKey={'diet'}
                cx='50%'
                cy='50%'
                innerRadius={60}
                outerRadius={80}
                fill='#82ca9d'
                label
              />
              <CartesianGrid stroke='#f5f5f5' />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>

          // <ResponsiveContainer width='100%' height='100%'>
        )}
      </div>
    </div>
  );
};

export default Church;
