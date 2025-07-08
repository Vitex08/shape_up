import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Layers, Zap, CheckCircle } from 'lucide-react';

export const ChunkingGuide = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Package className="mr-2 h-5 w-5 text-purple-500" />
          Chunking Strategy
        </CardTitle>
        <CardDescription>
          Organize work into meaningful, deliverable pieces
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start space-x-3">
          <Layers className="h-5 w-5 text-purple-500 mt-0.5" />
          <div>
            <p className="font-medium">Start with the core, then add layers</p>
            <p className="text-sm text-gray-600">
              Build the essential functionality first, then enhance
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <Zap className="h-5 w-5 text-orange-500 mt-0.5" />
          <div>
            <p className="font-medium">Make each chunk valuable</p>
            <p className="text-sm text-gray-600">
              Every piece should deliver something users can benefit from
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
          <div>
            <p className="font-medium">Keep chunks testable</p>
            <p className="text-sm text-gray-600">
              Each chunk should be something you can demo and validate
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
