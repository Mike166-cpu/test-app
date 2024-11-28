import React, {useEffect} from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, GraduationCap, UserCheck, TrendingUp, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  useEffect (()=> {
    document.title = "Dashboard";
  })
  const stats = [
    {
      title: 'Total Employees',
      value: '150',
      description: 'Active employees',
      icon: Users,
      trend: '+12% from last month',
    },
    {
      title: 'Onboarding',
      value: '5',
      description: 'In progress',
      icon: UserCheck,
      trend: '+2 this week',
    },
    {
      title: 'Training',
      value: '12',
      description: 'Active courses',
      icon: GraduationCap,
      trend: '85% completion rate',
    },
  ];

  const chartData = [
    { name: 'Jan', employees: 120 },
    { name: 'Feb', employees: 130 },
    { name: 'Mar', employees: 135 },
    { name: 'Apr', employees: 142 },
    { name: 'May', employees: 150 },
  ];

  const recentActivities = [
    { id: 1, action: 'New employee onboarded', time: '2 hours ago' },
    { id: 2, action: 'Training course completed', time: '4 hours ago' },
    { id: 3, action: 'Performance review scheduled', time: '6 hours ago' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <div className="mt-2 flex items-center text-xs text-green-500">
                <TrendingUp className="mr-1 h-3 w-3" />
                {stat.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Employee Growth</CardTitle>
            <CardDescription>Monthly employee count trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="employees"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-3 rounded-lg border p-3"
                >
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;