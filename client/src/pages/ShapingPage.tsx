import * as React from 'react';
import { ShapingForm } from '../components/shaping/ShapingForm';
import { ShapingGuide } from '../components/shaping/ShapingGuide';
import { ShapingExamples } from '../components/shaping/ShapingExamples';

export const ShapingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Solution Shaping
        </h1>
        <p className="text-lg text-gray-600">
          Now that we've framed the problem, let's rough out the solution approach without getting too detailed.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <ShapingGuide />
          <ShapingExamples />
        </div>
        <div>
          <ShapingForm />
        </div>
      </div>
    </div>
  );
};
