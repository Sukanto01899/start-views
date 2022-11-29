import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-between w-full md:w-9/12 mx-auto mt-24 text-center z-[-1]'>
            <div>
                <h1 className='text-xl font-semibold'>Month wise sell</h1>
             <BarChart width={500} height={250} data={data}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="month" />
             <YAxis />
             <Tooltip />
             <Legend />
             <Bar dataKey="sell" fill="#8884d8" />
             </BarChart>
            </div>
            
            <div>
                <h1 className='text-xl font-semibold'>Investment vs Revenue</h1>
            <AreaChart width={500} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;