import { DashboardStats } from "@/components/dashboard/DashboardStats";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your CRM dashboard. Here's an overview of your business metrics.
        </p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            Recent Activity
          </h3>
          <p className="text-muted-foreground">
            Recent leads and activities will be displayed here.
          </p>
        </div>
        
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            Sales Pipeline
          </h3>
          <p className="text-muted-foreground">
            Visual representation of your sales pipeline.
          </p>
        </div>
      </div>
    </div>
  );
}