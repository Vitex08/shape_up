import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Target, AlertCircle } from 'lucide-react';

export const BettingGuide = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-orange-500" />
          Betting Criteria
        </CardTitle>
        <CardDescription>
          Questions to ask before making the bet
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <Target className="h-5 w-5 text-green-500 mt-0.5" />
          <div>
            <p className="font-medium">Is the problem worth solving?</p>
            <p className="text-sm text-gray-600">
              Will solving this create meaningful value for users and business?
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <p className="font-medium">Can we finish in 2 weeks?</p>
            <p className="text-sm text-gray-600">
              Are we confident the chunks can be completed in one cycle?
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <div>
            <p className="font-medium">What's the circuit breaker?</p>
            <p className="text-sm text-gray-600">
              If we can't finish, what's the minimum valuable outcome?
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
