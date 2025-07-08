import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FramingPage } from './pages/FramingPage';
import { ShapingPage } from './pages/ShapingPage';
import { ChunkingPage } from './pages/ChunkingPage';
import { BettingPage } from './pages/BettingPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/framing" element={<FramingPage />} />
          <Route path="/shaping" element={<ShapingPage />} />
          <Route path="/chunking" element={<ChunkingPage />} />
          <Route path="/betting" element={<BettingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
