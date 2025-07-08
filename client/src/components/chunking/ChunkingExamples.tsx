import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export const ChunkingExamples = () => {
  const examples = [
    {
      title: "Password Reset Chunks",
      chunks: [
        {
          name: "Basic Reset Flow",
          description: "Email input → Send reset link → Basic success message",
          effort: "2-3 days"
        },
        {
          name: "Secure Reset Page",
          description: "Token validation → New password form → Success confirmation",
          effort: "1-2 days"
        },
        {
          name: "User Experience Polish",
          description: "Better error messages → Loading states → Email template",
          effort: "1-2 days"
        }
      ]
    },
    {
      title: "Mobile Onboarding Chunks",
      chunks: [
        {
          name: "Streamlined Signup",
          description: "Reduce form fields → Add skip options → Basic validation",
          effort: "3-4 days"
        },
        {
          name: "Progressive Disclosure",
          description: "Optional profile steps → Contextual help → Progress indicator",
          effort: "2-3 days"
        },
        {
          name: "Engagement Hooks",
          description: "Welcome tour → Sample content → First-use guidance",
          effort: "2-3 days"
        }
      ]
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          Chunking Examples
        </CardTitle>
        <CardDescription>
          See how solutions get broken into workable pieces
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {examples.map((example, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-900 mb-3">{example.title}</h4>
              <div className="space-y-3">
                {example.chunks.map((chunk, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-medium text-sm text-gray-900">{chunk.name}</h5>
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                        {chunk.effort}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{chunk.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
