
import { Calendar, TrendingUp } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Track your business performance and insights</p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Last 30 days</span>
        </div>
        
        <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
          <TrendingUp className="h-4 w-4 text-emerald-600" />
          <span className="text-sm font-medium text-emerald-700">+12.5% from last month</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
