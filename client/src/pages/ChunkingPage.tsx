import * as React from 'react';
import { ChunkingForm } from '../components/chunking/ChunkingForm';
import { ChunkingGuide } from '../components/chunking/ChunkingGuide';
import { ChunkingExamples } from '../components/chunking/ChunkingExamples';

export const ChunkingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Work Chunking
        </h1>
        <p className="text-lg text-gray-600">
          Break down the shaped solution into manageable pieces that can be built and integrated.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <ChunkingGuide />
          <ChunkingExamples />
        </div>
        <div>
          <ChunkingForm />
        </div>
      </div>
    </div>
  );
};
