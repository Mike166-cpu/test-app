import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import React, {useEffect} from 'react';

const Reports = () => {
  useEffect (()=> {
    document.title = "Report Analytics";
  })
  const monthlyData = [
    { month: 'Jan', employees: 120, training: 80 },
    { month: 'Feb', employees: 130, training: 85 },
    { month: 'Mar', employees: 135, training: 88 },
    { month: 'Apr', employees: 142, training: 90 },
    { month: 'May', employees: 150, training: 95 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">View detailed analytics and reports</p>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Employee Growth & Training Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="employees"
                    stroke="#8884d8"
                    name="Total Employees"
                  />
                  <Line
                    type="monotone"
                    dataKey="training"
                    stroke="#82ca9d"
                    name="Training Complete"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;