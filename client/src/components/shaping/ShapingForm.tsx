import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Save, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ShapingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    solutionTitle: '',
    approach: '',
    keyElements: [''],
    userFlow: '',
    risks: '',
    assumptions: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleElementChange = (index: number, value: string) => {
    const newElements = [...formData.keyElements];
    newElements[index] = value;
    setFormData(prev => ({
      ...prev,
      keyElements: newElements
    }));
  };

  const addElement = () => {
    setFormData(prev => ({
      ...prev,
      keyElements: [...prev.keyElements, '']
    }));
  };

  const removeElement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      keyElements: prev.keyElements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to database
    console.log('Shaping data:', formData);
    navigate('/chunking');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shape Your Solution</CardTitle>
        <CardDescription>
          Outline the solution approach at the right level of detail
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="solutionTitle">Solution Title</Label>
            <Input
              id="solutionTitle"
              value={formData.solutionTitle}
              onChange={(e) => handleInputChange('solutionTitle', e.target.value)}
              placeholder="Give your solution a clear name"
              required
            />
          </div>

          <div>
            <Label htmlFor="approach">Solution Approach</Label>
            <Textarea
              id="approach"
              value={formData.approach}
              onChange={(e) => handleInputChange('approach', e.target.value)}
              placeholder="Describe the high-level approach to solving this problem"
              rows={4}
              required
            />
          </div>

          <div>
            <Label>Key Elements</Label>
            <div className="space-y-2">
              {formData.keyElements.map((element, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={element}
                    onChange={(e) => handleElementChange(index, e.target.value)}
                    placeholder={`Key element ${index + 1}`}
                    className="flex-1"
                  />
                  {formData.keyElements.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeElement(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addElement} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Element
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="userFlow">User Flow</Label>
            <Textarea
              id="userFlow"
              value={formData.userFlow}
              onChange={(e) => handleInputChange('userFlow', e.target.value)}
              placeholder="Describe the main user journey through this solution"
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="risks">Risks & Concerns</Label>
            <Textarea
              id="risks"
              value={formData.risks}
              onChange={(e) => handleInputChange('risks', e.target.value)}
              placeholder="What could go wrong? What are the main risks?"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="assumptions">Key Assumptions</Label>
            <Textarea
              id="assumptions"
              value={formData.assumptions}
              onChange={(e) => handleInputChange('assumptions', e.target.value)}
              placeholder="What assumptions are we making about users, technology, or business?"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button type="submit" className="flex-1">
              Continue to Chunking
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
