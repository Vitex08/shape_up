import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Save, Plus, X, GripVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Chunk {
  name: string;
  description: string;
  effort: string;
  priority: string;
}

export const ChunkingForm = () => {
  const navigate = useNavigate();
  const [chunks, setChunks] = React.useState<Chunk[]>([
    { name: '', description: '', effort: '', priority: 'medium' }
  ]);

  const addChunk = () => {
    setChunks(prev => [...prev, { name: '', description: '', effort: '', priority: 'medium' }]);
  };

  const removeChunk = (index: number) => {
    setChunks(prev => prev.filter((_, i) => i !== index));
  };

  const updateChunk = (index: number, field: keyof Chunk, value: string) => {
    setChunks(prev => prev.map((chunk, i) => 
      i === index ? { ...chunk, [field]: value } : chunk
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to database
    console.log('Chunking data:', chunks);
    navigate('/betting');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Break Down Your Solution</CardTitle>
        <CardDescription>
          Organize the work into manageable, deliverable chunks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Work Chunks</Label>
              <Button type="button" variant="outline" size="sm" onClick={addChunk}>
                <Plus className="mr-2 h-4 w-4" />
                Add Chunk
              </Button>
            </div>
            
            {chunks.map((chunk, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 mt-3" />
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Label htmlFor={`chunk-name-${index}`} className="text-sm">
                          Chunk Name
                        </Label>
                        <Input
                          id={`chunk-name-${index}`}
                          value={chunk.name}
                          onChange={(e) => updateChunk(index, 'name', e.target.value)}
                          placeholder="What is this chunk called?"
                          required
                        />
                      </div>
                      <div className="w-32">
                        <Label htmlFor={`chunk-effort-${index}`} className="text-sm">
                          Effort
                        </Label>
                        <Input
                          id={`chunk-effort-${index}`}
                          value={chunk.effort}
                          onChange={(e) => updateChunk(index, 'effort', e.target.value)}
                          placeholder="1-2 days"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor={`chunk-desc-${index}`} className="text-sm">
                        Description
                      </Label>
                      <Textarea
                        id={`chunk-desc-${index}`}
                        value={chunk.description}
                        onChange={(e) => updateChunk(index, 'description', e.target.value)}
                        placeholder="What does this chunk deliver?"
                        rows={2}
                        required
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1">
                        <Label htmlFor={`chunk-priority-${index}`} className="text-sm">
                          Priority
                        </Label>
                        <Select 
                          value={chunk.priority} 
                          onValueChange={(value) => updateChunk(index, 'priority', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High (Must Have)</SelectItem>
                            <SelectItem value="medium">Medium (Should Have)</SelectItem>
                            <SelectItem value="low">Low (Nice to Have)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      {chunks.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeChunk(index)}
                          className="mt-6"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button type="submit" className="flex-1">
              Continue to Betting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
