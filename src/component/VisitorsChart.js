import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../pages/Admin.css'
import "tailwindcss/tailwind.css"

const visitorsData = [
  { month: 'Jan', count: 0 },
  { month: 'Feb', count: 35 },
  { month: 'Mar', count: 25 },
  { month: 'Apr', count: 40 },
  { month: 'May', count: 30 },
  { month: 'Jun', count: 45 },
  { month: 'Jul', count: 55 },
  { month: 'Aug', count: 50 },
  { month: 'Sep', count: 38 },
  { month: 'Oct', count: 42 },
];

export default function VisitorsChart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-blue font-medium">visiteurs au fil du temps en mois </strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={visitorsData}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >  
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#2196f3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
