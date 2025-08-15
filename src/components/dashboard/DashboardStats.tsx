import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp, DollarSign, Target, Percent } from "lucide-react";
import { crmService } from "@/services/crmService";
import { Skeleton } from "@/components/ui/skeleton";

export function DashboardStats() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: crmService.getDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-3 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statCards = [
    {
      title: "Total Leads",
      value: stats.total_leads,
      description: "All leads in system",
      icon: BarChart3,
      color: "text-blue-600"
    },
    {
      title: "Active Leads", 
      value: stats.active_leads,
      description: "Currently active",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Converted Leads",
      value: stats.converted_leads,
      description: "Successfully closed",
      icon: Target,
      color: "text-purple-600"
    },
    {
      title: "Total Revenue",
      value: `$${stats.total_revenue.toLocaleString()}`,
      description: "From closed deals",
      icon: DollarSign,
      color: "text-emerald-600"
    },
    {
      title: "Avg Deal Size",
      value: `$${Math.round(stats.avg_deal_size).toLocaleString()}`,
      description: "Per closed deal",
      icon: TrendingUp,
      color: "text-orange-600"
    },
    {
      title: "Conversion Rate",
      value: `${stats.conversion_rate.toFixed(1)}%`,
      description: "Success rate",
      icon: Percent,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <IconComponent className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}