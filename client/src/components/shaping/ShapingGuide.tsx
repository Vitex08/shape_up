import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shapes, Zap, Users, AlertTriangle } from 'lucide-react';

export const ShapingGuide = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shapes className="mr-2 h-5 w-5 text-green-500" />
          Shaping Principles
        </CardTitle>
        <CardDescription>
          Shape solutions at the right level of abstraction
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <Zap className="h-5 w-5 text-green-500 mt-0.5" />
          <div>
            <p className="font-medium">Solve the problem, not perfect the solution</p>
            <p className="text-sm text-gray-600">
              Focus on the core path that addresses the problem
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Users className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <p className="font-medium">Design for the majority case</p>
            <p className="text-sm text-gray-600">
              Handle the most common scenarios, not edge cases
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
          <div>
            <p className="font-medium">Stay rough and high-level</p>
            <p className="text-sm text-gray-600">
              Don't get bogged down in implementation details
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
