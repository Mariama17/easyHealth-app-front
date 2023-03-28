import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 30 },
  { x: 4, y: 40 },
  { x: 5, y: 50 },
  { x: 6, y: 60 }
];

function Graph() {
  return (
    <LineChart width={400} height={250} data={data} className='graph'>
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export default Graph;
