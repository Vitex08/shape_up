import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Users, Clock } from 'lucide-react';

export const FramingGuide = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertCircle className="mr-2 h-5 w-5 text-blue-500" />
          Framing Guidelines
        </CardTitle>
        <CardDescription>
          Follow these principles when framing your problem
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
          <div>
            <p className="font-medium">Start with the problem, not the solution</p>
            <p className="text-sm text-gray-600">
              Focus on what users are struggling with, not what you want to build
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Users className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <p className="font-medium">Define who has this problem</p>
            <p className="text-sm text-gray-600">
              Be specific about the user groups affected
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-orange-500 mt-0.5" />
          <div>
            <p className="font-medium">Set appetite and constraints</p>
            <p className="text-sm text-gray-600">
              How much time is this problem worth? What are the limits?
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
