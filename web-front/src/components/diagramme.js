import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { time: '9-10h', percentage: 70 },
    { time: '12-15h', percentage: 50 },
    { time: '15-18h', percentage: 60 },
    { time: '18-21h', percentage: 30 },
  ];
const colorScale = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Diagramme() {
    return (
        <BarChart width={420} height={260} data={data} className='diagramme'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="percentage" fill={colorScale} />
      </BarChart>
    );
  }
  
  export default Diagramme;
  