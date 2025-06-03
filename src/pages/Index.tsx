
import DashboardHeader from "@/components/DashboardHeader";
import RevenueChart from "@/components/RevenueChart";
import SalesChart from "@/components/SalesChart";
import UserGrowthChart from "@/components/UserGrowthChart";
import MarketDistributionChart from "@/components/MarketDistributionChart";
import StatsCards from "@/components/StatsCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto p-6 space-y-6">
        <DashboardHeader />
        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <SalesChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserGrowthChart />
          </div>
          <MarketDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
