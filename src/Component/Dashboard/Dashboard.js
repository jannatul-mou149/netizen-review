import React from 'react';
import { Line, LineChart, CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 9241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 12423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 17226,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 20529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 29601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 36700,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32 mt-8 h-[75vh]'>
            <LineChart width={500} height={300} data={data}>
                <CartesianGrid stroke="#ccc" />
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'revenue'}></Line>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip />
                <Legend />
                <YAxis></YAxis>
            </LineChart>
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
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <Bar dataKey="sell" fill="#5713bd" />
            </BarChart>
        </div>
    );
};

export default Dashboard;