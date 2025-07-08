import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Shapes, Package, TrendingUp } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Shape Up Process Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A step-by-step guide to implementing Shape Up methodology for your first cycle. 
          Learn how to frame problems, shape solutions, and make betting decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Target className="w-12 h-12 text-blue-500 mx-auto mb-2" />
            <CardTitle>1. Framing</CardTitle>
            <CardDescription>
              Define the problem and set boundaries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/framing">
              <Button className="w-full" variant="outline">
                Start Framing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Shapes className="w-12 h-12 text-green-500 mx-auto mb-2" />
            <CardTitle>2. Shaping</CardTitle>
            <CardDescription>
              Rough out the solution approach
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/shaping">
              <Button className="w-full" variant="outline">
                Start Shaping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <Package className="w-12 h-12 text-purple-500 mx-auto mb-2" />
            <CardTitle>3. Chunking</CardTitle>
            <CardDescription>
              Break work into manageable pieces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/chunking">
              <Button className="w-full" variant="outline">
                Start Chunking
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-2" />
            <CardTitle>4. Betting</CardTitle>
            <CardDescription>
              Make go/no-go decisions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/betting">
              <Button className="w-full" variant="outline">
                Start Betting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What is Shape Up?
        </h2>
        <p className="text-gray-700 mb-4">
          Shape Up is a product development methodology created by Basecamp that focuses on:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>2-week cycles with 3-day cooldowns</li>
          <li>Problem-first approach before solutions</li>
          <li>Small teams working autonomously</li>
          <li>Circuit breakers to prevent runaway projects</li>
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Ready to start your first Shape Up cycle?
        </h3>
        <Link to="/framing">
          <Button size="lg">
            Begin with Problem Framing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
