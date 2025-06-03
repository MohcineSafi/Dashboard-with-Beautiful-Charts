
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserGrowthChart = () => {
  const data = [
    { date: '2024-01', newUsers: 1200, activeUsers: 8500, totalUsers: 12000 },
    { date: '2024-02', newUsers: 1500, activeUsers: 9200, totalUsers: 13500 },
    { date: '2024-03', newUsers: 1800, activeUsers: 10100, totalUsers: 15300 },
    { date: '2024-04', newUsers: 2200, activeUsers: 11500, totalUsers: 17500 },
    { date: '2024-05', newUsers: 1900, activeUsers: 12200, totalUsers: 19400 },
    { date: '2024-06', newUsers: 2400, activeUsers: 13800, totalUsers: 21800 },
    { date: '2024-07', newUsers: 2100, activeUsers: 14200, totalUsers: 23900 },
    { date: '2024-08', newUsers: 2600, activeUsers: 15500, totalUsers: 26500 },
    { date: '2024-09', newUsers: 2300, activeUsers: 16100, totalUsers: 28800 },
    { date: '2024-10', newUsers: 2800, activeUsers: 17200, totalUsers: 31600 },
    { date: '2024-11', newUsers: 2500, activeUsers: 17800, totalUsers: 34100 },
    { date: '2024-12', newUsers: 3100, activeUsers: 19200, totalUsers: 37200 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">User Growth Trends</h3>
        <p className="text-sm text-gray-600">Monthly user acquisition and engagement metrics</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="date" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="newUsers" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#10B981' }}
            />
            <Line 
              type="monotone" 
              dataKey="activeUsers" 
              stroke="#F59E0B" 
              strokeWidth={3}
              dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#F59E0B' }}
            />
            <Line 
              type="monotone" 
              dataKey="totalUsers" 
              stroke="#6366F1" 
              strokeWidth={3}
              dot={{ fill: '#6366F1', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#6366F1' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-emerald-500 rounded"></div>
          <span className="text-sm text-gray-600">New Users</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-amber-500 rounded"></div>
          <span className="text-sm text-gray-600">Active Users</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-indigo-500 rounded"></div>
          <span className="text-sm text-gray-600">Total Users</span>
        </div>
      </div>
    </div>
  );
};

export default UserGrowthChart;
