import './chart.css';
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

export default function Chart({ data, title, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' height='80%'>
        <AreaChart
          height={250}
          data={data}
          margin={{ top: 10, right: 50, left: 0, bottom: 0 }}
          className='chartArea'
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.9} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey='_id' stroke='#5550bd' />
          <YAxis />

          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey={'total'}
            stroke='#82ca8d'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
