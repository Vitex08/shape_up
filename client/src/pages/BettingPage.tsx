import * as React from 'react';
import { BettingForm } from '../components/betting/BettingForm';
import { BettingGuide } from '../components/betting/BettingGuide';
import { BettingExamples } from '../components/betting/BettingExamples';

export const BettingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Betting Decision
        </h1>
        <p className="text-lg text-gray-600">
          Time to make the final call: Is this shaped work worth betting a 2-week cycle on?
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <BettingGuide />
          <BettingExamples />
        </div>
        <div>
          <BettingForm />
        </div>
      </div>
    </div>
  );
};
