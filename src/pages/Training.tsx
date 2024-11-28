import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, BookOpen } from 'lucide-react';
import React, {useEffect} from 'react';

const Training = () => {
  useEffect (()=> {
    document.title = "Training Management";
  })
  const courses = [
    {
      title: 'Company Introduction',
      description: 'Learn about our company culture and values',
      duration: '1 hour',
      progress: 100,
      status: 'Completed',
    },
    {
      title: 'Safety Training',
      description: 'Workplace safety guidelines and procedures',
      duration: '2 hours',
      progress: 60,
      status: 'In Progress',
    },
    {
      title: 'HR Policies',
      description: 'Understanding company policies and procedures',
      duration: '1.5 hours',
      progress: 0,
      status: 'Not Started',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Training</h2>
        <p className="text-muted-foreground">
          Access and track your training courses
        </p>
      </div>

      <div className="grid gap-4">
        {courses.map((course) => (
          <Card key={course.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <Badge
                  variant={
                    course.status === 'Completed'
                      ? 'default'
                      : course.status === 'In Progress'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {course.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <Button
                  variant={course.progress === 100 ? 'outline' : 'default'}
                  size="sm"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {course.progress === 100 ? 'Review' : 'Continue'}
                </Button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${course.progress}%` }}
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

export default Training;