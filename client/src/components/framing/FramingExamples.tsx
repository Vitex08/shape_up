import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export const FramingExamples = () => {
  const examples = [
    {
      title: "Customer Support Overload",
      problem: "Support team is spending 60% of time on repetitive password reset requests",
      audience: "Existing customers who forgot their passwords",
      impact: "Support team can't focus on complex issues, customer wait times increased",
      appetite: "1 week maximum"
    },
    {
      title: "Mobile App Onboarding",
      problem: "New users abandon the app during the 5-step signup process",
      audience: "First-time mobile app users",
      impact: "40% drop-off rate during onboarding, poor first impression",
      appetite: "1.5 weeks"
    },
    {
      title: "Invoice Processing Delays",
      problem: "Manual invoice approval process takes 5-7 days, causing payment delays",
      audience: "Finance team and vendors waiting for payment",
      impact: "Vendor relationships strained, cash flow management difficult",
      appetite: "1 week"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          Example Problems
        </CardTitle>
        <CardDescription>
          Real-world examples of well-framed problems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900">{example.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{example.problem}</p>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Audience:</span> {example.audience}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Impact:</span> {example.impact}
                </p>
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Appetite:</span> {example.appetite}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
