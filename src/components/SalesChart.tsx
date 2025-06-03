
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  const data = [
    { quarter: 'Q1 2023', sales: 85000, target: 80000 },
    { quarter: 'Q2 2023', sales: 92000, target: 85000 },
    { quarter: 'Q3 2023', sales: 78000, target: 90000 },
    { quarter: 'Q4 2023', sales: 105000, target: 95000 },
    { quarter: 'Q1 2024', sales: 98000, target: 100000 },
    { quarter: 'Q2 2024', sales: 112000, target: 105000 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Sales Performance</h3>
        <p className="text-sm text-gray-600">Quarterly sales vs targets</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="quarter" stroke="#6B7280" fontSize={12} />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="target" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
            <Bar dataKey="sales" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded"></div>
          <span className="text-sm text-gray-600">Target</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-sm text-gray-600">Actual Sales</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
