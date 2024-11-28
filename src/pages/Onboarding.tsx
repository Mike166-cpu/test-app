import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, UserCheck } from 'lucide-react';
import React, {useEffect} from 'react';
const Onboarding = () => {
  useEffect (()=> {
    document.title = "Onboarding";
  })
  const onboardingTasks = [
    {
      employee: 'John Doe',
      position: 'Software Engineer',
      status: 'In Progress',
      completedTasks: 5,
      totalTasks: 8,
    },
    {
      employee: 'Jane Smith',
      position: 'Product Manager',
      status: 'Pending',
      completedTasks: 0,
      totalTasks: 8,
    },
    {
      employee: 'Mike Johnson',
      position: 'UI Designer',
      status: 'Completed',
      completedTasks: 8,
      totalTasks: 8,
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Onboarding</h2>
        <p className="text-muted-foreground">
          Manage new employee onboarding process
        </p>
      </div>

      <div className="grid gap-4">
        {onboardingTasks.map((task) => (
          <Card key={task.employee}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{task.employee}</CardTitle>
                <Badge
                  variant={
                    task.status === 'Completed'
                      ? 'default'
                      : task.status === 'In Progress'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {task.status === 'Completed' && (
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                  )}
                  {task.status === 'In Progress' && (
                    <Clock className="mr-1 h-3 w-3" />
                  )}
                  {task.status === 'Pending' && (
                    <UserCheck className="mr-1 h-3 w-3" />
                  )}
                  {task.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{task.position}</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>
                    {task.completedTasks}/{task.totalTasks} tasks
                  </span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{
                      width: `${(task.completedTasks / task.totalTasks) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;