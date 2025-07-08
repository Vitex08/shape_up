import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const FramingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    title: '',
    problem: '',
    audience: '',
    impact: '',
    appetite: '',
    constraints: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to database
    console.log('Framing data:', formData);
    navigate('/shaping');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frame Your Problem</CardTitle>
        <CardDescription>
          Fill out the details to properly frame your problem before moving to shaping
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Problem Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Give your problem a clear, descriptive title"
              required
            />
          </div>

          <div>
            <Label htmlFor="problem">Problem Description</Label>
            <Textarea
              id="problem"
              value={formData.problem}
              onChange={(e) => handleInputChange('problem', e.target.value)}
              placeholder="Describe the problem in detail. What exactly is happening that needs to be fixed?"
              rows={4}
              required
            />
          </div>

          <div>
            <Label htmlFor="audience">Target Audience</Label>
            <Input
              id="audience"
              value={formData.audience}
              onChange={(e) => handleInputChange('audience', e.target.value)}
              placeholder="Who specifically has this problem? Be precise about the user group."
              required
            />
          </div>

          <div>
            <Label htmlFor="impact">Impact & Urgency</Label>
            <Textarea
              id="impact"
              value={formData.impact}
              onChange={(e) => handleInputChange('impact', e.target.value)}
              placeholder="What happens if this problem isn't solved? How does it affect users and business?"
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="appetite">Time Appetite</Label>
            <Select value={formData.appetite} onValueChange={(value) => handleInputChange('appetite', value)}>
              <SelectTrigger>
                <SelectValue placeholder="How much time is this problem worth?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5days">3-5 days (Small bet)</SelectItem>
                <SelectItem value="1week">1 week (Medium bet)</SelectItem>
                <SelectItem value="1.5weeks">1.5 weeks (Big bet)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="constraints">Constraints & No-gos</Label>
            <Textarea
              id="constraints"
              value={formData.constraints}
              onChange={(e) => handleInputChange('constraints', e.target.value)}
              placeholder="What should NOT be included? What are the boundaries and limitations?"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button type="submit" className="flex-1">
              Continue to Shaping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
