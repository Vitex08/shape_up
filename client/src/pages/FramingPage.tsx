import * as React from 'react';
import { FramingForm } from '../components/framing/FramingForm';
import { FramingExamples } from '../components/framing/FramingExamples';
import { FramingGuide } from '../components/framing/FramingGuide';

export const FramingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Problem Framing
        </h1>
        <p className="text-lg text-gray-600">
          Before jumping into solutions, we need to clearly define the problem we're solving.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <FramingGuide />
          <FramingExamples />
        </div>
        <div>
          <FramingForm />
        </div>
      </div>
    </div>
  );
};
