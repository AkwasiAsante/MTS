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
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './church.css';

const Church = ({ churchData }) => {
  const [showGraphTable, setShowGraphTable] = useState(0);

  return (
    <div className='graphTable'>
      <div className='gtButtons'>
        <button onClick={() => setShowGraphTable(0)}>Show Graph</button>
        <button onClick={() => setShowGraphTable(1)}>Show Table</button>
        {/* <button onClick={() => setShowGraphTable(2)}>Show Pie Chart</button> */}
      </div>

      <div className='gtContent'>
        <h3 className='chartTitle'>Church Based Statistics</h3>
        {showGraphTable === 0 && (
          <div className='graphShow'>
            <ComposedChart
              width={1200}
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
                      {data.church}
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

        {/* {showGraphTable === 2 && (
          <div className='pieShow'>
            <ComposedChart width={730} height={250} data={churchData}>
              <XAxis dataKey='church' />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke='#f5f5f5' />

              <Bar dataKey='total' barSize={20} fill='#413ea0' />
            </ComposedChart>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Church;
