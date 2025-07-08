import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, CheckCircle, XCircle } from 'lucide-react';

export const BettingExamples = () => {
  const examples = [
    {
      title: "Password Reset - GO",
      decision: "go",
      reasoning: "High-impact problem, clear solution, manageable scope",
      risks: "Minimal - well-understood problem domain",
      circuitBreaker: "Basic reset flow without advanced features"
    },
    {
      title: "Advanced Analytics Dashboard - NO GO",
      decision: "no-go",
      reasoning: "Scope too large, unclear user needs, many unknowns",
      risks: "High - complex integrations, unclear requirements",
      circuitBreaker: "Would need significant reduction in scope"
    },
    {
      title: "Mobile Onboarding - GO",
      decision: "go",
      reasoning: "Clear problem, shaped solution, testable chunks",
      risks: "Medium - user behavior assumptions need validation",
      circuitBreaker: "Skip advanced features, focus on core flow"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          Betting Examples
        </CardTitle>
        <CardDescription>
          See how different projects get evaluated
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className={`border-l-4 pl-4 py-2 ${
              example.decision === 'go' ? 'border-green-500' : 'border-red-500'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {example.decision === 'go' ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <h4 className="font-semibold text-gray-900">{example.title}</h4>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-gray-700">Reasoning:</p>
                  <p className="text-xs text-gray-600">{example.reasoning}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Risk Level:</p>
                  <p className="text-xs text-gray-600">{example.risks}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Circuit Breaker:</p>
                  <p className="text-xs text-gray-600">{example.circuitBreaker}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
