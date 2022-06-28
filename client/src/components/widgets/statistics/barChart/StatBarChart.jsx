//import { Bar } from "react-chartjs-2";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatBarChart = () => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
    },
    {
      name: 'Page B',
      uv: 3000,
    },
    {
      name: 'Page C',
      uv: 2000,
    },
    {
      name: 'Page D',
      uv: 2780,
    },
    {
      name: 'Page E',
      uv: 1890,
    },
    {
      name: 'Page F',
      uv: 2390,
    },
    {
      name: 'Page G',
      uv: 3490,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#6A82FB" />
    </BarChart>
  </ResponsiveContainer>
  )
}

export default StatBarChart
