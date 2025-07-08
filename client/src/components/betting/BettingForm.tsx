import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, XCircle, Save, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BettingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    decision: '',
    reasoning: '',
    riskLevel: '',
    circuitBreaker: '',
    teamAssignment: '',
    timeline: '',
    successMetrics: ''
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
    console.log('Betting data:', formData);
    // Navigate based on decision
    if (formData.decision === 'go') {
      alert('🎉 Project approved! Ready to start building.');
    } else if (formData.decision === 'no-go') {
      alert('🛑 Project not approved. Consider reshaping or deprioritizing.');
    } else {
      alert('🔄 Project needs more work. Back to shaping phase.');
    }
    navigate('/');
  };

  const resetForm = () => {
    navigate('/framing');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make Your Bet</CardTitle>
        <CardDescription>
          Evaluate all the work done and make the final decision
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="decision">Betting Decision</Label>
            <Select value={formData.decision} onValueChange={(value) => handleInputChange('decision', value)}>
              <SelectTrigger>
                <SelectValue placeholder="What's your decision?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="go">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    GO - Bet on this project
                  </div>
                </SelectItem>
                <SelectItem value="no-go">
                  <div className="flex items-center">
                    <XCircle className="mr-2 h-4 w-4 text-red-500" />
                    NO GO - Don't bet on this project
                  </div>
                </SelectItem>
                <SelectItem value="reshape">
                  <div className="flex items-center">
                    <RotateCcw className="mr-2 h-4 w-4 text-orange-500" />
                    RESHAPE - Needs more work
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="reasoning">Decision Reasoning</Label>
            <Textarea
              id="reasoning"
              value={formData.reasoning}
              onChange={(e) => handleInputChange('reasoning', e.target.value)}
              placeholder="Why are you making this decision? What factors influenced it?"
              rows={4}
              required
            />
          </div>

          <div>
            <Label htmlFor="riskLevel">Risk Assessment</Label>
            <Select value={formData.riskLevel} onValueChange={(value) => handleInputChange('riskLevel', value)}>
              <SelectTrigger>
                <SelectValue placeholder="What's the risk level?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Risk - Well understood problem</SelectItem>
                <SelectItem value="medium">Medium Risk - Some unknowns</SelectItem>
                <SelectItem value="high">High Risk - Many unknowns</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="circuitBreaker">Circuit Breaker</Label>
            <Textarea
              id="circuitBreaker"
              value={formData.circuitBreaker}
              onChange={(e) => handleInputChange('circuitBreaker', e.target.value)}
              placeholder="If we can't finish everything, what's the minimum valuable outcome?"
              rows={3}
              required
            />
          </div>

          {formData.decision === 'go' && (
            <>
              <div>
                <Label htmlFor="teamAssignment">Team Assignment</Label>
                <Textarea
                  id="teamAssignment"
                  value={formData.teamAssignment}
                  onChange={(e) => handleInputChange('teamAssignment', e.target.value)}
                  placeholder="Who will work on this? What team composition is needed?"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="timeline">Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="When should this be completed?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-cycle">Current 2-week cycle</SelectItem>
                    <SelectItem value="next-cycle">Next 2-week cycle</SelectItem>
                    <SelectItem value="future-cycle">Future cycle (not urgent)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="successMetrics">Success Metrics</Label>
                <Textarea
                  id="successMetrics"
                  value={formData.successMetrics}
                  onChange={(e) => handleInputChange('successMetrics', e.target.value)}
                  placeholder="How will you measure success? What metrics will you track?"
                  rows={3}
                />
              </div>
            </>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={resetForm} className="flex-1">
              <RotateCcw className="mr-2 h-4 w-4" />
              Start Over
            </Button>
            <Button type="button" variant="outline" className="flex-1">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button type="submit" className="flex-1">
              {formData.decision === 'go' ? '🎉 Approve Project' : 
               formData.decision === 'no-go' ? '🛑 Reject Project' : 
               '🔄 Send Back to Shaping'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
