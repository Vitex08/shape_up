import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export const ShapingExamples = () => {
  const examples = [
    {
      title: "Password Reset Solution",
      approach: "Self-service password reset with email verification",
      elements: [
        "Forgot password link on login page",
        "Email verification step",
        "New password creation form",
        "Automatic login after reset"
      ],
      risks: "Email deliverability issues, security concerns with email links"
    },
    {
      title: "Mobile Onboarding Streamline",
      approach: "Progressive disclosure with optional steps",
      elements: [
        "Core info collection (email, name)",
        "Progressive profile building",
        "Skip option for non-essential steps",
        "Contextual help tooltips"
      ],
      risks: "Users might skip important setup steps"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          Shaping Examples
        </CardTitle>
        <CardDescription>
          See how problems get shaped into solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900">{example.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{example.approach}</p>
              <div className="mt-3">
                <p className="text-xs font-medium text-gray-700 mb-2">Key Elements:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {example.elements.map((element, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-xs font-medium text-gray-700">Risks:</p>
                <p className="text-xs text-gray-600">{example.risks}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
